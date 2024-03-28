import { IPlanet } from '../../shared/interfaces/planets.interface';

export interface PlanetsModel {
  count: number;
  next: string | null;
  previous: string | null;
  planets: IPlanet[];
  loading: boolean;
  error: string;
}
