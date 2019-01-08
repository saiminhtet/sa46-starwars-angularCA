import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

import { People } from '../model/people';
@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  peoples: People[];

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.getPeoples();
  }

  getPeoples(): void {
    this.starwarsService.getPeoples()
    .subscribe(peoples => this.peoples = peoples['results']);
  }


}
