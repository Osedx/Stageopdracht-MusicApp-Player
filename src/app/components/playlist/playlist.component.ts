import { Component, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { PlaylistState } from '../../services/playlist-state.service';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'my-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent {
    @ViewChild('playlistplayer') public playlistplayer: ElementRef;
    constructor( public playlistState: PlaylistState, public dataservice: DataService) {
        this.playlistState.playList = [];
        this.getPlaylist();
    }
    private getPlaylist() {
        this.dataservice.getPlaylist().subscribe(
        (data) => {
            console.log(data);
            this.playlistState.playList = data;
            this.playlistState.playListSize = data.length;
            if (this.playlistState.playList.length > 0) {
                this.playlistState.activeVideo = this.playlistState.playList[0];
                this.playlistState.activeVideoPosition = 0; }
            this.playlistState.playListFilled.next();
            },
    (error) => { console.log(error); } ); }
}
