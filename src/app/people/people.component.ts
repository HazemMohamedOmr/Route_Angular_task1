import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  imgPerfixs: string = "https://image.tmdb.org/t/p/w500";
  peoples: any[];

  constructor(_PeopleService: PeopleService) {
    _PeopleService.peopleResponse().subscribe((data) => {
      this.peoples = data.results;
    });
  }

  ngOnInit(): void {
  }

}
