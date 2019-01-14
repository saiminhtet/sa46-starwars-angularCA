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
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {


  vehicle: Vehicle;

  constructor(private starwarsService: StarwarsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private location: Location,
     private http: HttpClient) { }

  ngOnInit() {
    this.getVehicle();
  }

  getVehicle(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.starwarsService.getVehiclebyId(id)
    .subscribe(vehicle => {
      this.vehicle = vehicle;
      this.vehicle.img_url = './assets/images/vehicles/' + id + '.jpg';
      this.vehicle.v_pilots = this.getPeopleDescription(this.vehicle.pilots);
      this.vehicle.v_films = this.getFilmDescription(this.vehicle.films);
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
