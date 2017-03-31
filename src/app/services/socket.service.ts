import { Injectable } from "@angular/core";
import * as io from "socket.io-client";

@Injectable()
export class SocketService {
private host : string = "https://musicwebapp.herokuapp.com";
    public socket : SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect(this.host);
  }
}
