import { IFilm } from '../../shared/interfaces/films.interface';

export interface FilmsModel {
  count: number;
  next: string | null;
  previous: string | null;
  films: IFilm[];
  loading: boolean;
  error: string;
}
