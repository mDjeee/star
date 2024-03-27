export interface PlanetsModel {
  count: number;
  next: string | null;
  previous: string | null;
  planets: any[];
  loading: boolean;
  error: string;
}
