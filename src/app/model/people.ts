import { Planet } from '../model/planet';
import { Species } from '../model/species';
import { Film } from '../model/film';
import { Starship } from '../model/starship';
import { Vehicle } from '../model/vehicle';

export class People {
  name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;  // Planet
    films: string[];    // Film
    species: string[];  // Species
    starships: string[];    // Starship
    vehicles: string[]; // Vehicle
    url: string;

    p_homeworld: Planet;
    p_species: Species[];
    p_films: Film[];
    p_starships: Starship[];
    p_vehicles: Vehicle[];
}
