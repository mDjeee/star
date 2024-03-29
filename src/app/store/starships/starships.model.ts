import { IStarship } from '../../shared/interfaces/starships.interface';

export interface StarshipsModel {
  count: number;
  next: string | null;
  previous: string | null;
  starships: IStarship[];
  loading: boolean;
  error: string;
}
