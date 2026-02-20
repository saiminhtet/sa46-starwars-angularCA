import { People } from '../model/people';
import { Planet } from '../model/planet';
import { Species } from '../model/species';
import { Starship } from '../model/starship';
import { Vehicle } from '../model/vehicle';


export class Film {
    title!: string;
    episode_id!: number;
    opening_crawl!: string;
    director!: string;
    producer!: string;
    release_date!: Date;
    species!: string[];  // Species
    starships!: string[];    // Vehicle
    characters!: string[];   // People
    planets!: string[];  // Planet
    vehicles!: string[]; // Vehicle
    url!: string;
    img_url!: string;

    f_characters!: People[];
    f_planets!: Planet[];
    f_species!: Species[];
    f_starships!: Starship[];
    f_vehicles!: Vehicle[];
}
