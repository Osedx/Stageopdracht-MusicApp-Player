import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistPageComponent } from './playlistpage.component';
import { PlaylistComponent } from '../../components/playlist/playlist.component';
// import { PlaylistItemComponent } from '../../components/playlistitem/playlistitem.component';
// import { PlayerComponent } from '../../components/player/player.component';
// import { ActiveVideoInfoComponent } from
// '../../components/activevideoinfo/activevideoinfo.component';
import { PlaylistState } from '../../services/playlist-state.service';
// import { myYoutubeSafeUrlPipe } from '../../pipes/youtube-safe-url.pipe';
import { DataService } from '../../services/data.service';
import { SocketService } from '../../services/socket.service';
import { MessageService } from '../../services/message.service';
import { SharedModule } from '../shared/shared.module';
//import { VirtualScrollModule } from 'angular2-virtual-scroll';

@NgModule({
    imports: [ CommonModule, SharedModule ],
  providers: [ PlaylistState, DataService, SocketService, MessageService ],
    declarations: [ PlaylistPageComponent,
        PlaylistComponent ],
    exports: [PlaylistPageComponent]
})

export class PlaylistPageModule { }
