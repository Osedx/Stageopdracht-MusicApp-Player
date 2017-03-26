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
    public player: any;
}
