import { PlanetsModel } from './planets.model';

export const planetsState: PlanetsModel = {
  planets: [],
  loading: false,
  error: '',
  next: null,
  previous: null,
  count: 0,
}
