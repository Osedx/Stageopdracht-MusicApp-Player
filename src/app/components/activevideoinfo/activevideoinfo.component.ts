import { Component } from '@angular/core';
import { PlaylistState } from '../../services/playlist-state.service';

@Component({
    selector: 'my-activevideoinfo',
    templateUrl: './activevideoinfo.component.html',
    styleUrls: ['./activevideoinfo.component.css']
})

export class ActiveVideoInfoComponent {
    constructor( public playlistState: PlaylistState ) {}
}
