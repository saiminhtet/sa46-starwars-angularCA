import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StarwarsService } from '../starwars.service';

import { People } from '../model/people';
@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  peoples: People[];

  constructor(private starwarsService: StarwarsService,
  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getPeoples();
  }

  getPeoples(): void {
    this.starwarsService.getPeoples()
    .subscribe(peoples => this.peoples = peoples['results']);
  }

  getPeopleDetails(url: string) {
    const id = url.split('/')[5];
    this.router.navigate(['/people/', id ]);
  }

}
