import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
public socket: SocketIOClient.Socket;
private host: string = 'https://musicwebapp.herokuapp.com/';

  constructor() {
    this.socket = io.connect(this.host);
  }
}
