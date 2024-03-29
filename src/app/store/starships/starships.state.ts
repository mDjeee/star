import { StarshipsModel } from './starships.model';

export const starshipsState: StarshipsModel = {
  starships: [],
  loading: false,
  error: '',
  next: null,
  previous: null,
  count: 0,
}
