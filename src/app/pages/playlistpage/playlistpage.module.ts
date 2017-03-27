import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistPageComponent } from './playlistpage.component';
import { PlaylistComponent } from '../../components/playlist/playlist.component';
import { PlaylistItemComponent } from '../../components/playlistitem/playlistitem.component';
import { PlayerComponent } from '../../components/player/player.component';
import { ActiveVideoInfoComponent } from
'../../components/activevideoinfo/activevideoinfo.component';
import { PlaylistState } from '../../services/playlist-state.service';
// import { myYoutubeSafeUrlPipe } from '../../pipes/youtube-safe-url.pipe';
import { DataService } from '../../services/data.service';
import { YoutubePlayerModule } from 'ng2-youtube-player';

@NgModule({
    imports: [ CommonModule, YoutubePlayerModule ],
  providers: [ PlaylistState, DataService ],
    declarations: [ PlaylistItemComponent, PlaylistPageComponent,
        PlaylistComponent, PlayerComponent, ActiveVideoInfoComponent ],
    exports: [PlaylistPageComponent]
})

export class PlaylistPageModule { }
