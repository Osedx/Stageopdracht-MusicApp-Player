import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PlaylistItemComponent } from '../../components/playlistitem/playlistitem.component';
import { PlayerComponent } from '../../components/player/player.component';
import { ActiveVideoInfoComponent } from
'../../components/activevideoinfo/activevideoinfo.component';

import { YoutubePlayerModule } from 'ng2-youtube-player';

@NgModule({
    imports: [CommonModule, YoutubePlayerModule],
    declarations: [
        PlaylistItemComponent, PlayerComponent, ActiveVideoInfoComponent
    ],
    exports: [
        PlaylistItemComponent, PlayerComponent, ActiveVideoInfoComponent
    ]
})

export class SharedModule {
}
