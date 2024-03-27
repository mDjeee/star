import { FilmsModel } from './films.model';

export const filmsState: FilmsModel = {
  films: [],
  loading: false,
  error: '',
  next: null,
  previous: null,
  count: 0,
}
