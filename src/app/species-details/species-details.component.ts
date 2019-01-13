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
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css']
})
export class SpeciesDetailsComponent implements OnInit {

  species: Species;

  constructor(private starwarsService: StarwarsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private location: Location,
     private http: HttpClient) { }

  ngOnInit() {
    this.getSpecies();
  }

  getSpecies(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.starwarsService.getSpeciesbyId(id)
    .subscribe(species => {
      this.species = species;
      this.species.img_url = './assets/images/species/' + id + '.jpg';
      // get planet details
      this.starwarsService.getPlanetDescription(this.species.homeworld)
      .subscribe(planet => {
        const planet_id = planet.url.split('/')[5];
        planet.img_url = './assets/images/planets/' + planet_id + '.jpg';
        this.species.s_homeworld = planet;
      });
      this.species.s_people = this.getPeopleDescription(this.species.people);
      this.species.s_films = this.getFilmDescription(this.species.films);
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
        film.push(result);
      });
    }
    return film;
  }
}
