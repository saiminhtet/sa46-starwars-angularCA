import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { StarwarsService } from '../starwars.service';

import { People } from '../model/people';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

   people: People;

  constructor(private starwarsService: StarwarsService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
               private location: Location) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void{
     const id = this.activatedRoute.snapshot.params.id;
    this.starwarsService.getPeoplebyId(id)
    .subscribe(people => this.people = people);
  }

  goBack(): void {
    this.location.back();
  }
}
