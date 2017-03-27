import { Component, OnInit } from '@angular/core';
// import { myYoutubeSafeUrlPipe } from '../../pipes/youtube-safe-url.pipe';
import { PlaylistState } from '../../services/playlist-state.service';
import { Playlist } from '../models/playlist.model';

@Component({
    selector: 'my-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
    constructor( public playlistState: PlaylistState ) {}
ngOnInit() {}
    public onStateChange(event) {
    if (event.data === 0) {
    this.nextVideo();
    }
    }
    public savePlayer(player) {
        this.playlistState.player = player;
        player.playVideo();
    }
    public nextVideo() {
    if (this.playlistState.activeVideoPosition + 1 ===
    this.playlistState.playListSize) {
    this.playlistState.activeVideoPosition = 0;
    } else {
    this.playlistState.activeVideoPosition =
    this.playlistState.activeVideoPosition + 1;
    }
    console.log(this.playlistState.activeVideoPosition);
    this.playlistState.activeVideo =
    this.playlistState.playList[this.playlistState.activeVideoPosition];
    this.playlistState.player.loadVideoById(
    this.playlistState.playList[this.playlistState.activeVideoPosition]._id
        );
    }
}
