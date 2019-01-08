import { People } from '../model/people';
import { Film } from '../model/film';

export class Vehicle {
  name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    films: string[];    // Film
    pilots: string[];   // People
    url: string;

    v_films: Film[];
    v_pilots: People[];
}
