import { People } from '../model/people';
import { Planet } from '../model/planet';
import { Film } from '../model/film';

export class Species {
  name!: string;
  classification!: string;
  designation!: string;
  average_height!: string;
  average_lifespan!: string;
  eye_colors!: string;
  hair_colors!: string;
  skin_colors!: string;
  language!: string;
  homeworld!: string; // Planet
  people!: string[];
  films!: string[];
  url!: string;
  img_url!: string;

  s_homeworld!: Planet;
  s_people!: People[];
  s_films!: Film[];
}
