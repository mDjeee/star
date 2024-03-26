import { IPaginateResponse } from './paginate.interface';

export interface IFilm {
  title: string;
  director: string;
  producer: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[]
  release_date: string;
  characters: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
  created: string;
  edited: string;
  chips?: any[];
}

export type IFilmResponse = IPaginateResponse<IFilm>
