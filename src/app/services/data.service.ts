import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  public getPlaylist(): Observable<any> {
          return this.http.get('https://musicwebapp.herokuapp.com/api/playlist')
          .map((res) => res.json());
  }
  public getToplist(): Observable<any> {
          return this.http.get('https://musicwebapp.herokuapp.com/api/toplist')
          .map((res) => res.json());
  }
  public getCountToplist(): Observable<any> {
          return this.http.get('https://musicwebapp.herokuapp.com/api/toplist/count')
          .map((res) => res.json());
  }
  public addPlaylistItem(playlistitem: any): Observable<any> {
    console.log(this.options);
    console.log(JSON.stringify(playlistitem));
    return this.http.post('https://musicwebapp.herokuapp.com/api/playlistitem',
          JSON.stringify(playlistitem), this.options);
  }
}
