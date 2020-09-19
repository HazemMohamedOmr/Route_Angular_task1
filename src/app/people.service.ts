import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(public _HttpClient: HttpClient) {

  }

  peopleResponse(): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/person/popular?api_key=fa1bafb2d1dbd0f6870258fcf476f472&language=en-US&page=1");
  }
}
