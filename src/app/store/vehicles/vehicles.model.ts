import { IVehicle } from '../../shared/interfaces/vehicles.interface';

export interface VehiclesModel {
  count: number;
  next: string | null;
  previous: string | null;
  vehicles: IVehicle[];
  loading: boolean;
  error: string;
}
