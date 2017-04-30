import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist } from '../models/playlist.model';
import { DataService } from '../../services/data.service';
import { PlaylistState } from '../../services/playlist-state.service';
// import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from 'ng-semantic';

@Component({
    selector: 'my-playlistitem',
    templateUrl: './playlistitem.component.html',
    styleUrls: ['./playlistitem.component.css']
})

export class PlaylistItemComponent implements OnInit {
    @Input() public playlistitem: Playlist;
    @Input() public index: number;
    public playlistIndex: number;
 constructor( public playlistState: PlaylistState, public dataService: DataService ) {}
public ngOnInit() {
    this.playlistIndex = this.playlistState.playList.indexOf(this.playlistitem);
}
    // set the selected video as active
    public selectVideo() {
        if ( this.playlistState.activeVideo._id === this.playlistitem._id ) { return; }
        this.playlistState.activeVideo = this.playlistitem;
        this.playlistState.activeVideoPosition = this.playlistIndex;
        this.playlistState.player.loadVideoById(this.playlistitem._id);
    }

}
