import { IPaginateResponse } from './paginate.interface';

export interface IVehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_ccapacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string;
  created: string;
  edited: string;
  url: string;
  chips?: any[];
}

export type IVehiclesResponse = IPaginateResponse<IVehicle>;
