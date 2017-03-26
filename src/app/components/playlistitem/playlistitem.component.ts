import { Component, Input } from '@angular/core';
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

export class PlaylistItemComponent {
    @Input() public playlistitem: Playlist;
    @Input() public index: number;
 constructor( public playlistState: PlaylistState, public dataService: DataService ) {}

    // calls the methods for deleting the playlistitem and associated ratings
    public deleteFromPlaylist() {
            this.deletePlaylistItem(this.playlistitem._id);
            this.deleteRatings(this.playlistitem._id);
    }
    // delete the playlistitem by id
    public deletePlaylistItem(id: String) {
             this.dataService.deletePlaylistItem(id).subscribe(
                (res) => { this.playlistState.playList.splice(this.index, 1);
//                console.log(this.index);
//                console.log(this.playlistitem);
//                console.log('playlistitem succesfully deleted from database.', 'success');
                },
                (error) => { console.log(error); }
              );
    }
    // delete all ratings with the given playlistitemid
    public deleteRatings(id: String) {
             this.dataService.deleteRatings(id).subscribe(
                (res) => {
                console.log('ratings succesfully deleted from database.', 'success');
                },
                (error) => { console.log(error); }
              );
    }
    // set the selected video as active
    public selectVideo() {
if ( this.playlistState.activeVideo._id === this.playlistitem._id ) { return; }
this.playlistState.activeVideo = this.playlistitem;
this.playlistState.activeVideoPosition = this.index;
this.playlistState.player.loadVideoById(this.playlistitem._id);
    }

}
