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
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  people!: People;
  planet!: Planet;
  constructor(private starwarsService: StarwarsService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
               private location: Location,
               private http: HttpClient,
               private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getPeople();
  }

  getPeople(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.starwarsService.getPeoplebyId(id)
    .subscribe(people => {
      this.people = people;
      const people_id = this.people.url.split('/')[5];
      this.people.img_url = './assets/images/people/' + people_id + '.jpg';
      // get planet details
      this.starwarsService.getPlanetDescription(this.people.homeworld)
      .subscribe(planet => {
        const planet_id = planet.url.split('/')[5];
        planet.img_url = './assets/images/planets/' + planet_id + '.jpg';
        this.people.p_homeworld = planet;
        this.spinner.hide();
      });

      // get film details
      this.people.p_films = this.getFilmDescription(this.people.films);
      // get species details
       this.people.p_species = this.getSpeciesDescription(this.people.species);
     // get vehicle details
       this.people.p_vehicles = this.getVehicleDescription(this.people.vehicles);
       // get starship details
       this.people.p_starships = this.getStarshipsDescription(this.people.starships);
      // console.log('peoples', this.people);
    });
  }

  getFilmDescription(films: string[]): Film[] {
    const film: Film[] = [];
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
  goBack(): void {
    this.location.back();
  }

  gotoDetails(url: string) {
    const id = url.split('/')[2];
    const desc = url.split('/')[1];
    this.router.navigate(['/' + desc + '/', id ]);
  }
}
