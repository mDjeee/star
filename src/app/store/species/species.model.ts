import { ISpecies } from '../../shared/interfaces/species.interface';

export interface SpeciesModel {
  count: number;
  next: string | null;
  previous: string | null;
  species: ISpecies[];
  loading: boolean;
  error: string;
}
