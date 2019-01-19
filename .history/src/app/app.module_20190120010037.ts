import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    PeoplesComponent,
    PeopleDetailsComponent,
    FilmsComponent,
    FilmDetailsComponent,
    SpeciesComponent,
    SpeciesDetailsComponent,
    VehicleDetailsComponent,
    VehiclesComponent,
    StarshipsComponent,
    StarshipDetailsComponent,
    PlanetDetailsComponent,
    PlanetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
