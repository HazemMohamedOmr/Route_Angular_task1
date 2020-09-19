import { Component, OnInit } from '@angular/core';
import { TVService } from '../tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TVComponent implements OnInit {
  imgPerfixs: string = "https://image.tmdb.org/t/p/w500";
  TVs: any[];

  constructor(_TVService: TVService) {
    _TVService.TVResponse().subscribe((data) => {
      this.TVs = data.results;
    })
  }

  ngOnInit(): void {
  }

}
