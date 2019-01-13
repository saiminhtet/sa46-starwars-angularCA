import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeoplesComponent } from './peoples/peoples.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { FilmsComponent } from './films/films.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeoplesComponent },
  { path: 'people/:id', component: PeopleDetailsComponent },
  { path: 'film', component: FilmsComponent },
  { path: 'film/:id', component: FilmDetailsComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'species/:id', component: SpeciesDetailsComponent },
  { path: 'vehicle', component: VehiclesComponent },
  { path: 'vehicle/:id', component: VehicleDetailsComponent },
  { path: 'starship', component: StarshipsComponent },
  { path: 'starship/:id', component: StarshipDetailsComponent },
  { path: 'planet', component: PlanetsComponent },
  { path: 'planet/:id', component: PlanetDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
