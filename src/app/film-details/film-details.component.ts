import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StarwarsService } from '../starwars.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { People } from '../model/people';
import { Planet } from '../model/planet';
import { Species } from '../model/species';
import { Film } from '../model/film';
import { Starship } from '../model/starship';
import { Vehicle } from '../model/vehicle';

@Component({
  standalone: false,
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film!: Film;
  planet!: Planet;
  constructor(private starwarsService: StarwarsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private location: Location,
     private http: HttpClient,
     private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getFilm();
  }

  getFilm(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.starwarsService.getFilmbyId(id)
    .subscribe(film => {
      this.film = film;
      this.film.img_url = './assets/images/films/' + id + '.jpg';
      this.film.f_characters = this.getPeopleDescription(this.film.characters);
      this.film.f_planets = this.getPlanetsDescription(this.film.planets);
      this.film.f_species = this.getSpeciesDescription(this.film.species);
      this.film.f_starships = this.getStarshipsDescription(this.film.starships);
      this.film.f_vehicles = this.getVehicleDescription(this.film.vehicles);

      this.spinner.hide();
    });
  }

  getPeopleDescription(peoples: string[]): People[] {
    const people: People[] = [];
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

  getSpeciesDescription(species: string[]): Species[] {
    const species_info: Species[] = [];
    // tslint:disable-next-line:forin
    for (const s in species) {
      this.http.get<Species>(species[s])
      .subscribe( result => {
        const species_id = species[s].split('/')[5];
        result.img_url = './assets/images/species/' + species_id + '.jpg';
        result.url = '/species/' + species_id;
        species_info.push(result);
      });
    }
    return species_info;
  }

  getVehicleDescription(vehicles: string[]): Vehicle[] {
    const vehicle: Vehicle[] = [];
    // tslint:disable-next-line:forin
    for (const v in vehicles) {
      this.http.get<Vehicle>(vehicles[v])
      .subscribe( result => {
        const vehicle_id = result.url.split('/')[5];
        result.img_url = './assets/images/vehicles/' + vehicle_id + '.jpg';
        result.url = '/vehicle/' + vehicle_id;
        vehicle.push(result);
      });
    }
    return vehicle;
  }

  getStarshipsDescription(starships: string[]): Starship[] {
    const starship: Starship[] = [];
    // tslint:disable-next-line:forin
    for (const s in starships) {
      this.http.get<Starship>(starships[s])
      .subscribe( result => {
        const starship_id = starships[s].split('/')[5];
        result.img_url = './assets/images/starships/' + starship_id + '.jpg';
        result.url = '/starship/' + starship_id;
        starship.push(result);
      });
    }
    return starship;
  }

  getPlanetsDescription(planets: string[]): Planet[] {
    const planet: Planet[] = [];
    // tslint:disable-next-line:forin
    for (const p in planets) {
      this.http.get<Planet>(planets[p])
      .subscribe( result => {
        const id = planets[p].split('/')[5];
        result.img_url = './assets/images/planets/' + id + '.jpg';
        result.url = '/planet/' + id;
        planet.push(result);
      });
    }
    return planet;
  }

  gotoDetails(url: string) {
    const id = url.split('/')[2];
    const desc = url.split('/')[1];
    this.router.navigate(['/' + desc + '/', id ]);
  }

  goBack(): void {
    this.location.back();
  }
}
