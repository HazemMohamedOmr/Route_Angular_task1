import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient: HttpClient) {

  }

  movieResponce(): Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/movie/top_rated?api_key=fa1bafb2d1dbd0f6870258fcf476f472&language=en-US&page=1');
  }
}
