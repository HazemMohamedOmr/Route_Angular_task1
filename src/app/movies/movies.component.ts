import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  imgPerfixs: string = "https://image.tmdb.org/t/p/w500";
  topMovies: any[];

  constructor(_MoviesService: MoviesService) {
    _MoviesService.movieResponce().subscribe((data) => {
      this.topMovies = data.results;
    });
  }

  ngOnInit(): void {
  }

}