import { People } from '../model/people';
import { Film } from '../model/film';

export class Planet {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: string[];    // People
    films: string[];    // Film
    url: string;
    img_url: string;

    p_films: Film[];
    p_residents: People[];
}
