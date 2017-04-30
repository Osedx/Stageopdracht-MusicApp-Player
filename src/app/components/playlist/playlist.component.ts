import { Component, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PlaylistState } from '../../services/playlist-state.service';
import { DataService } from '../../services/data.service';
import { SettingService } from '../../services/settings.service';
import { SocketService } from '../../services/socket.service';
import { MessageService } from '../../services/message.service';

@Component({
    selector: 'my-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnDestroy, OnInit {
    @ViewChild('playlistplayer') public playlistplayer: ElementRef;
    public lengthPlaylist: number;
    public checks = 0;
    public _subscription: any;
    public _subscriptionPlayer: any;
    public toplist = [];
    public viewPortItems: any;
    constructor( public playlistState: PlaylistState, public dataservice: DataService,
                 public settingService: SettingService, public socketService: SocketService,
                 public messageService: MessageService ) {
        this.messageService.showMessage = false;
        this.playlistState.playList = [];
        this.playlistState.activeVideo = undefined;
        this.playlistState.activeVideoPosition = 0;
        this.getPlaylist();
    }

    public ngOnInit() {
        this.socketService.socket.on('playlistisupdated', (userid) => {
            this.showUpdateMessage();
        });
        this.socketService.socket.on('itemdeleted', (userid) => {
            this.showUpdateMessage();
        });
    }

    public ngOnDestroy() {
    if (typeof this._subscription !== 'undefined') {this._subscription.unsubscribe(); }
    if (typeof this._subscriptionPlayer !== 'undefined') {this._subscriptionPlayer.unsubscribe(); }
    }
    // show refresh popup
    public showUpdateMessage() {
        this.messageService.showMessage = true;
        this._subscription = this.messageService.updateList.subscribe(() => {
            this.getPlaylist();
        });
    }
    // Get playlist from database
    public getPlaylist() {
        this.dataservice.getPlaylist().subscribe(
        (data) => {
            this.playlistState.playList = data;
            this.playlistState.playListSize = data.length;
            this.playlistState.playListFilled.next();
            console.log(this.playlistState.player);
            if (typeof this.playlistState.player != "undefined") {
                if (this.playlistState.activeVideo._id !== this.playlistState.playList[this.playlistState.activeVideoPosition]._id) {
                    this.playlistState.activeVideo =
                    this.playlistState.playList[this.playlistState.activeVideoPosition];
                    this.playlistState.player.loadVideoById(
                    this.playlistState.playList[this.playlistState.activeVideoPosition]._id );
                }
            } else {
            this.playlistState.activeVideo = data[0];
            this.playlistState.activeVideoPosition = 0;
            this._subscriptionPlayer = this.playlistState.playerCreated.subscribe(() => {
            this.playlistState.player.loadVideoById(
            this.playlistState.playList[this.playlistState.activeVideoPosition]._id );
            }); }
            this.checkEnoughSongs();
            },
    (error) => { console.log(error); } ); }
    // enable/disable shuffle
    public shuffle() {
        this.playlistState.loop = false;
        this.playlistState.shuffle = !this.playlistState.shuffle;
    }
    // enable/disable loop
    public loop() {
        this.playlistState.shuffle = false;
        this.playlistState.loop = !this.playlistState.loop;
    }
    // play next video
    public nextVideo() {
    if (this.playlistState.activeVideoPosition + 1 ===
    this.playlistState.playListSize) {
    this.playlistState.activeVideoPosition = 0;
    } else {
    this.playlistState.activeVideoPosition =
    this.playlistState.activeVideoPosition + 1;
    }
    this.playlistState.activeVideo =
    this.playlistState.playList[this.playlistState.activeVideoPosition];
    this.playlistState.player.loadVideoById(
    this.playlistState.playList[this.playlistState.activeVideoPosition]._id
        );
    }
    // play previous video
    public previousVideo() {
    if (this.playlistState.activeVideoPosition === 0) {
    this.playlistState.activeVideoPosition = this.playlistState.playListSize - 1;
    } else {
    this.playlistState.activeVideoPosition =
    this.playlistState.activeVideoPosition - 1;
    }
    this.playlistState.activeVideo =
    this.playlistState.playList[this.playlistState.activeVideoPosition];
    this.playlistState.player.loadVideoById(
    this.playlistState.playList[this.playlistState.activeVideoPosition]._id
        );
    }
    // pause/unpause video
    public changeState() {
        this.playlistState.paused = !this.playlistState.paused;
    }
    // pause video
    public pause() {
        this.playlistState.player.pauseVideo();
        this.playlistState.paused = true;
    }
    // play video
    public play() {
        this.playlistState.player.playVideo();
        this.playlistState.paused = false;
    }
    // check if playlist has enough songs video
    private checkEnoughSongs() {
                    this.lengthPlaylist = this.playlistState.playListSize;
                    if ( this.lengthPlaylist <= this.settingService.addFromToplist ) {
                            this.addFromToplist();
                    }
    }

    private addFromToplist() {
    if (this.toplist.length === 0) {
        this.dataservice.getToplist().subscribe(
        (data) => {
    if (typeof(data !== 'undefined')) {
            this.toplist = data;
            this.addRandomToplistSong(this.toplist); }
        },
        (error) => {
            console.log(error);
    }
    ); } else {
        this.addRandomToplistSong(this.toplist);
    }
    }

    private addRandomToplistSong (toplist) {
        const max = toplist.length;
        const randomIndex = Math.floor(Math.random() * (max));
        let notInPlaylist = true;
        for (let i = 0; i < this.playlistState.playListSize; i++) {
            if (toplist[randomIndex]._id ===
            this.playlistState.playList[i]._id) {
            notInPlaylist = false;
            }
        }
        if (notInPlaylist) {
            this.checks = 0;
            this.addToPlaylist(toplist[randomIndex]);
        } else {
            this.checks++;
            if (this.checks <= this.settingService.maxCheckAdding ) { this.checkEnoughSongs(); }
        }
    }

    private addToPlaylist(toplistitem: any) {
            this.dataservice.addPlaylistItem({_id: toplistitem._id, title: toplistitem.title,
            thumbnailurl: toplistitem.thumbnailurl, channeltitle: toplistitem.channeltitle,
            channelid: toplistitem.channelid, description: toplistitem.description,
            uploader: 'Toplist', uploaderid: 'Toplistid', rating: 0
            }).subscribe(
        (res) => {
            const newPlaylistItem = res.json();
            this.playlistState.playList[this.lengthPlaylist] = newPlaylistItem;
            this.playlistState.playListSize = this.playlistState.playList.length;
            this.checkEnoughSongs();
                },
        (error) => {
            console.log('error: ' + error);
            this.checkEnoughSongs();
            }
        );
    }
}
