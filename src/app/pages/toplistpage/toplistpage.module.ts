import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToplistPageComponent } from './toplistpage.component';
import { ToplistComponent } from '../../components/toplist/toplist.component';
// import { PlaylistItemComponent } from '../../components/playlistitem/playlistitem.component';
// import { PlayerComponent } from '../../components/player/player.component';
// import { ActiveVideoInfoComponent } from
// '../../components/activevideoinfo/activevideoinfo.component';
import { PlaylistState } from '../../services/playlist-state.service';
// import { myYoutubeSafeUrlPipe } from '../../pipes/youtube-safe-url.pipe';
import { DataService } from '../../services/data.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ CommonModule, SharedModule ],
  providers: [ PlaylistState, DataService ],
    declarations: [ ToplistPageComponent,
        ToplistComponent ],
    exports: [ToplistPageComponent]
})

export class ToplistPageModule { }
