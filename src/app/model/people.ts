import { Planet } from '../model/planet';
import { Species } from '../model/species';
import { Film } from '../model/film';
import { Starship } from '../model/starship';
import { Vehicle } from '../model/vehicle';

export class People {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    img_url: string;


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
