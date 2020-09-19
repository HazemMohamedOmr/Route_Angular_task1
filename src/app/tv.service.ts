import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TVService {

  constructor(public _HttpClient: HttpClient) {

  }

  TVResponse(): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/tv/top_rated?api_key=fa1bafb2d1dbd0f6870258fcf476f472&language=en-US&page=1");
  }
}
