import { environment } from '../environments/environment';


export const apiPeopleUrl = [environment.apiUrl, 'api/people'].join('/');
export const apiFilmsUrl = [environment.apiUrl, 'api/films'].join('/');
export const apiPlanetsUrl = [environment.apiUrl, 'api/planets'].join('/');
export const apiSpeciesUrl = [environment.apiUrl, 'api/species'].join('/');
export const apiStarshipsUrl = [environment.apiUrl, 'api/starships'].join('/');
export const apiVehiclesUrl = [environment.apiUrl, 'api/vehicles'].join('/');
