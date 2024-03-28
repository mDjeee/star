import { IPerson } from '../../shared/interfaces/people.interface';

export interface PeopleModel {
  count: number;
  next: string | null;
  previous: string | null;
  people: IPerson[];
  loading: boolean;
  error: string;
}
