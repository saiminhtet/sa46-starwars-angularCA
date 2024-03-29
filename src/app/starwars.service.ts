import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { List } from './model/list';
import { People } from './model/people';
import { Planet } from './model/planet';
import { Species } from './model/species';
import { Film } from './model/film';
import { Starship } from './model/starship';
import { Vehicle } from './model/vehicle';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private starwars_Url = 'https://swapi.dev/api';  // URL to web api

  constructor(
    private http: HttpClient,
     private messageService: MessageService) { }




//#region People
 /** GET Peoples from the server */
getPeoples (): Observable<List[]> {
  return this.http.get<List[]>(this.starwars_Url + '/people/' )
  .pipe(
    tap(_ => this.log('fetched peoples')),
    catchError(this.handleError('getPeoples', []))
    );
}

getPeoplesfromURL(API_URL): Observable<List[]> {
  return this.http.get<List[]>(API_URL)
  .pipe(
    tap(_ => this.log('fetched peoples')),
    catchError(this.handleError('getPeoples', []))
    );
}
  /** GET People by id. Will 404 if id not found */
  getPeoplebyId(id: number): Observable<People> {
    const url = this.starwars_Url + '/people/' + id;
    // console.log(url);
    return this.http.get<People>(url)
    .pipe(
      tap(_ => this.log(`fetched People id=${id}`)),
      catchError(this.handleError<People>(`getPeoplebyId id=${id}`))
    );
  }
//#endregion

//#region Film
getFilms (): Observable<List[]> {
  return this.http.get<List[]>(this.starwars_Url + '/films/' )
  .pipe(
    tap(_ => this.log('fetched getFilms')),
    catchError(this.handleError('getFilms', []))
    );
}

getFilmsfromURL(API_URL): Observable<List[]> {
  return this.http.get<List[]>(API_URL)
  .pipe(
    tap(_ => this.log('fetched getFilmsfromURL')),
    catchError(this.handleError('getFilmsfromURL', []))
    );
}
  /** GET People by id. Will 404 if id not found */
  getFilmbyId(id: number): Observable<Film> {
    const url = this.starwars_Url + '/films/' + id;
    // console.log(url);
    return this.http.get<Film>(url)
    .pipe(
      tap(_ => this.log(`fetched Film id=${id}`)),
      catchError(this.handleError<Film>(`getFilmbyId id=${id}`))
    );
  }
//#endregion

//#region Species
getSpecies (): Observable<List[]> {
  return this.http.get<List[]>(this.starwars_Url + '/species/' )
  .pipe(
    tap(_ => this.log('fetched getSpecies')),
    catchError(this.handleError('getSpecies', []))
    );
}

getSpeciesfromURL(API_URL): Observable<List[]> {
  return this.http.get<List[]>(API_URL)
  .pipe(
    tap(_ => this.log('fetched getSpeciesfromURL')),
    catchError(this.handleError('getSpeciesfromURL', []))
    );
}
  /** GET People by id. Will 404 if id not found */
  getSpeciesbyId(id: number): Observable<Species> {
    const url = this.starwars_Url + '/species/' + id;
    // console.log(url);
    return this.http.get<Species>(url)
    .pipe(
      tap(_ => this.log(`fetched Species id=${id}`)),
      catchError(this.handleError<Species>(`getSpeciesbyId id=${id}`))
    );
  }
//#endregion

//#region Starships
getStarships (): Observable<List[]> {
  return this.http.get<List[]>(this.starwars_Url + '/starships/' )
  .pipe(
    tap(_ => this.log('fetched getStarships')),
    catchError(this.handleError('getStarships', []))
    );
}

getStarshipsfromURL(API_URL): Observable<List[]> {
  return this.http.get<List[]>(API_URL)
  .pipe(
    tap(_ => this.log('fetched getStarshipsfromURL')),
    catchError(this.handleError('getStarshipsfromURL', []))
    );
}
  /** GET People by id. Will 404 if id not found */
  getStarshipbyId(id: number): Observable<Starship> {
    const url = this.starwars_Url + '/starships/' + id;
    // console.log(url);
    return this.http.get<Starship>(url)
    .pipe(
      tap(_ => this.log(`fetched Starship id=${id}`)),
      catchError(this.handleError<Starship>(`getStarshipbyId id=${id}`))
    );
  }
//#endregion

//#region vehicles
getVehicles (): Observable<List[]> {
  return this.http.get<List[]>(this.starwars_Url + '/vehicles/' )
  .pipe(
    tap(_ => this.log('fetched getVehicles')),
    catchError(this.handleError('getVehicles', []))
    );
}

getVehiclesfromURL(API_URL): Observable<List[]> {
  return this.http.get<List[]>(API_URL)
  .pipe(
    tap(_ => this.log('fetched getVehiclessfromURL')),
    catchError(this.handleError('getVehiclessfromURL', []))
    );
}
  /** GET People by id. Will 404 if id not found */
  getVehiclebyId(id: number): Observable<Vehicle> {
    const url = this.starwars_Url + '/vehicles/' + id;
    // console.log(url);
    return this.http.get<Vehicle>(url)
    .pipe(
      tap(_ => this.log(`fetched Vehicle id=${id}`)),
      catchError(this.handleError<Vehicle>(`getVehiclebyId id=${id}`))
    );
  }
//#endregion

//#region Planets
getPlanets (): Observable<List[]> {
  return this.http.get<List[]>(this.starwars_Url + '/planets/' )
  .pipe(
    tap(_ => this.log('fetched getPlanets')),
    catchError(this.handleError('getPlanets', []))
    );
}

getPlanetsfromURL(API_URL): Observable<List[]> {
  return this.http.get<List[]>(API_URL)
  .pipe(
    tap(_ => this.log('fetched getPlanetsfromURL')),
    catchError(this.handleError('getPlanetsfromURL', []))
    );
}

  getPlanetbyId(id: number): Observable<Planet> {
    const url = this.starwars_Url + '/planets/' + id;
    // console.log(url);
    return this.http.get<Planet>(url)
    .pipe(
      tap(_ => this.log(`fetched Planet id=${id}`)),
      catchError(this.handleError<Planet>(`getPlanetbyId id=${id}`))
    );
  }
//#endregion

//#region Log_and_Error_handling
     /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
     // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

   /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StarwarsService: ${message}`);
  }
//#endregion

//#region Get_Details
getPeopleDescription(peoples) {
  const people = [];
  // tslint:disable-next-line:forin
  for (const p in peoples) {
    this.http.get<People>(p)
    .pipe(
      tap(_ => this.log('fetched getPeopleDescription')),
      catchError(this.handleError('getPeopleDescription', []))
      )
    .subscribe( result => {
      people.push(result);
    });
  }
  return people;
}


getPlanetDescription(planet): Observable<Planet> {
 return this.http.get<Planet>(planet)
 .pipe(
  tap(_ => this.log(`fetched getPlanetDescription`)),
  catchError(this.handleError<Planet>(`getPlanetDescription`))
);
}


getFilmsDescription(films): Observable<Film> {
return this.http.get<Film>(films)
.pipe(
 tap(_ => this.log(`fetched getFilmsDescription`)),
 catchError(this.handleError<Film>(`getFilmsDescription`))
);
}
//#endregion

}
