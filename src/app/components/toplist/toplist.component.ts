import { Component, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { PlaylistState } from '../../services/playlist-state.service';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'my-toplist',
    templateUrl: './toplist.component.html',
    styleUrls: ['./toplist.component.css']
})

export class ToplistComponent {
    @ViewChild('playlistplayer') public playlistplayer: ElementRef;
    constructor( public playlistState: PlaylistState, public dataservice: DataService) {
        this.playlistState.playList = [];
        this.playlistState.activeVideo = undefined;
        this.playlistState.activeVideoPosition = 0;
        this.getToplist();
    }
    private getToplist() {
        this.dataservice.getToplist().subscribe(
        (data) => {
            this.playlistState.playList = data;
            console.log('toplist');
            this.playlistState.playListSize = data.length;
            if (this.playlistState.playList.length > 0) {
                this.playlistState.activeVideo = this.playlistState.playList[0];
                console.log(this.playlistState.playList);
                this.playlistState.activeVideoPosition = 0;
            }
            this.playlistState.playListFilled.next();
            },
    (error) => { console.log(error); } ); }
}
