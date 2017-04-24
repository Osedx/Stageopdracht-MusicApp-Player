import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MessageService {
public showMessage: boolean;
public updateList: Subject<string> = new Subject<string>();
private host: string = 'https://musicwebapp.herokuapp.com';
}
