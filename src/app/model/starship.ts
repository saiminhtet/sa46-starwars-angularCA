import { People } from '../model/people';
import { Film } from '../model/film';

export class Starship {
  name!: string;
  model!: string;
  starship_class!: string;
  manufacturer!: string;
  cost_in_credits!: string;
  length!: string;
  crew!: string;
  passengers!: string;
  max_atmosphering_speed!: string;
  hyperdrive_rating!: string;
  MGLT!: string;
  cargo_capacity!: string;
  consumables!: string;
  films!: string[];    // Film
  pilots!: string[];   // People
  url!: string;
  img_url!: string;

  s_films!: Film[];
  s_pilots!: People[];
}
