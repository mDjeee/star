import { IPaginateResponse } from './paginate.interface';

export interface IPerson {
  birth_year: string;
  created: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
}

export type IPeopleResponse = IPaginateResponse<IPerson>
