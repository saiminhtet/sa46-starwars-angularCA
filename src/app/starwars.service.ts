import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

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

  private starwars_Url = 'https://swapi.co/api';  // URL to web api

  constructor(
    private http: HttpClient,
     private messageService: MessageService) { }



 /** GET Peoples from the server */

 getPeoples (): Observable<People[]> {
  return this.http.get<People[]>(this.starwars_Url + '/people/' )
  .pipe(
    tap(_ => this.log('fetched peoples')),
    catchError(this.handleError('getPeoples', []))
    );
 }

  /** GET People by id. Will 404 if id not found */
  getPeoplebyId(id: number): Observable<People> {
    const url = this.starwars_Url +'/people/'+ id;
    console.log(url);
    return this.http.get<People>(url).pipe(
      tap(_ => this.log(`fetched People id=${id}`)),
      catchError(this.handleError<People>(`getPeoplebyId id=${id}`))
    );
  }

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
    this.messageService.add(`HeroService: ${message}`);
  }
}
