import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'my-playlistpage',
  templateUrl: './playlistpage.component.html',
  styleUrls: ['./playlistpage.component.css']
})
export class PlaylistPageComponent {
    showUpdateMessage = false;
    refreshPlayList = false;
    constructor( public messageService: MessageService ) {}

    public refreshList() {
        this.messageService.showMessage = false;
        this.messageService.updateList.next();
    }
}
