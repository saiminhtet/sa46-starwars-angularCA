import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StarwarsService } from '../starwars.service';

import { People } from '../model/people';
import { Planet } from '../model/planet';
import { Species } from '../model/species';
import { Film } from '../model/film';
import { Starship } from '../model/starship';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  starship: Starship;

  constructor(private starwarsService: StarwarsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private location: Location,
     private http: HttpClient) { }

  ngOnInit() {
    this.getStarship();
  }

  getStarship(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.starwarsService.getStarshipbyId(id)
    .subscribe(starship => {
      this.starship = starship;
      this.starship.img_url = './assets/images/starships/' + id + '.jpg';
      this.starship.s_pilots = this.getPeopleDescription(this.starship.pilots);
      this.starship.s_films = this.getFilmDescription(this.starship.films);
    });
  }

  getPeopleDescription(peoples) {
    const people = [];
    // tslint:disable-next-line:forin
    for (const p in peoples) {
      this.http.get<People>(peoples[p])
      .subscribe( result => {
        const id = result.url.split('/')[5];
        result.img_url = './assets/images/people/' + id + '.jpg';
        result.url = '/people/' + id;
        people.push(result);
      });
    }
    return people;
  }

  getFilmDescription(films) {
    const film = [];
    // tslint:disable-next-line:forin
    for (const f in films) {
      this.http.get<Film>(films[f])
      .subscribe( result => {
        const film_id = result.url.split('/')[5];
        result.img_url = './assets/images/films/' + film_id + '.jpg';
        result.url = '/film/' + film_id;
        film.push(result);
      });
    }
    return film;
  }
}
