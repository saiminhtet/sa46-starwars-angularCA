import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StarwarsService } from '../starwars.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgNavigatorShareService } from 'ng-navigator-share';

import { People } from '../model/people';
import { Planet } from '../model/planet';
import { Species } from '../model/species';
import { Film } from '../model/film';
import { Starship } from '../model/starship';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  private ngNavigatorShareService: NgNavigatorShareService;
  planet: Planet;

  constructor(private starwarsService: StarwarsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private location: Location,
     private http: HttpClient,
     private spinner: NgxSpinnerService,
     ngNavigatorShareService: NgNavigatorShareService) {
      this.ngNavigatorShareService = ngNavigatorShareService;
     }

  ngOnInit() {
    this.spinner.show();
    this.getPlanet();
  }

  getPlanet(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.starwarsService.getPlanetbyId(id)
    .subscribe(planet => {
      this.planet = planet;
      this.planet.img_url = './assets/images/planets/' + id + '.jpg';
      this.planet.p_residents = this.getPeopleDescription(this.planet.residents);
      this.planet.p_films = this.getFilmDescription(this.planet.films);
      this.spinner.hide();
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

  gotoDetails(url: string) {
    const id = url.split('/')[2];
    const desc = url.split('/')[1];
    this.router.navigate(['/' + desc + '/', id ]);
  }
}
