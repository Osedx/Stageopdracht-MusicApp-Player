import { Injectable } from '@angular/core';
import { Playlist } from '../components/models/playlist.model';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class PlaylistState {
    public playListFilled: Subject<string> = new Subject<string>();
    public playList: Playlist[] = [];
    public playListSize: number;
    public activeVideo: Playlist;
    public activeVideoPosition: number;
    public paused = false;
    public shuffle = false;
    public loop = false;
    public playerCreated: Subject<string> = new Subject<string>();
    public playerCreatedBoolean: boolean;
    public player: any;
    public viewPortItems: any;
    public toplist: boolean;

public updateViewPort() {
if (this.viewPortItems.indexOf(this.activeVideo) === -1 ) {
    const sizeOver =
        this.activeVideoPosition +
        this.viewPortItems.length -
        this.playListSize;
    if (sizeOver < 0) {
        for (let i = 0; i < this.viewPortItems.length; i++) {
        this.viewPortItems[i] = this.playList[this.activeVideoPosition + i];
            }
    } else {
        for (let i = 0; i < this.viewPortItems.length; i++) {
        this.viewPortItems[i] = this.playList[this.activeVideoPosition + i - sizeOver];
    }
    }
}}}
