import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  public getPlaylist(): Observable<any> {
          return this.http.get('https://musicwebapp.herokuapp.com/playlist')
          .map((res) => res.json());
  }
  public getToplist(): Observable<any> {
          return this.http.get('https://musicwebapp.herokuapp.com/toplist')
          .map((res) => res.json());
  }
  public deletePlaylistItem(id: String): Observable<any> {
    return this.http.delete(`/playlistitem/${id}`, this.options);
  }
  public deleteRatings(id: String): Observable<any> {
    console.log(id);
    return this.http.delete(`/ratings/${id}`, this.options);
  }
  public getCountToplist(): Observable<any> {
          return this.http.get('https://musicwebapp.herokuapp.com/toplist/count')
          .map((res) => res.json());
  }
}
