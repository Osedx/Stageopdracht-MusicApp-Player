import { Injectable } from "@angular/core";
import { Subject }    from "rxjs/Subject";

@Injectable()
export class MessageService {
private host : string = "https://musicwebapp.herokuapp.com";
    public showMessage : boolean;
    public updateList : Subject<string> = new Subject<string>();
}
