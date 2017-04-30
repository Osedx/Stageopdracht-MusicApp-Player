import { Component } from '@angular/core';
// import { myYoutubeSafeUrlPipe } from '../../pipes/youtube-safe-url.pipe';
import { PlaylistState } from '../../services/playlist-state.service';
import { Playlist } from '../models/playlist.model';

@Component({
    selector: 'my-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})

export class PlayerComponent {
    constructor( public playlistState: PlaylistState ) {}
    public onStateChange(event) {
    if (event.data === 0) {
    if (this.playlistState.shuffle) {
    this.nextRandomVideo();
    } else if (this.playlistState.loop) {
    this.loopVideo();
    } else {
    this.nextVideo();
    }} else if (event.data === 2) {
    this.playlistState.paused = true;
    } else if (event.data === 1) {
    this.playlistState.paused = false;
    }
    }
    public savePlayer(player) {
        this.playlistState.player = player;
        this.playlistState.playerCreated.next();
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
    this.playlistState.activeVideo =
    this.playlistState.playList[this.playlistState.activeVideoPosition];
    this.playlistState.player.loadVideoById(
    this.playlistState.playList[this.playlistState.activeVideoPosition]._id
        );
    this.playlistState.updateViewPort();
    }
    public nextRandomVideo() {
    let randomIndex = this.getRandomIndex();
    if (this.playlistState.activeVideoPosition === randomIndex) {
        return this.nextRandomVideo();
    } else {
    this.playlistState.activeVideoPosition = randomIndex;
    this.playlistState.activeVideo =
    this.playlistState.playList[this.playlistState.activeVideoPosition];
    this.playlistState.player.loadVideoById(
    this.playlistState.playList[this.playlistState.activeVideoPosition]._id
    );
    }
    this.playlistState.updateViewPort();
    }
    public getRandomIndex() {
        const max = this.playlistState.playListSize;
        const randomIndex = Math.floor(Math.random() * (max));
        return randomIndex;
    }
    public loopVideo() {
    this.playlistState.player.loadVideoById(
        this.playlistState.playList[this.playlistState.activeVideoPosition]._id);
    }
}
