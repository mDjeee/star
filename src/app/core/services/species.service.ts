import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiSpeciesUrl } from '../../../constants/endpoints.constants';
import { ISpecies, ISpeciesResponse } from '../../shared/interfaces/species.interface';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpecies(page: number) {
    const query = page <=1 ? '' : `?page=${page}`;
    return this.http.get<ISpeciesResponse>(apiSpeciesUrl + query);
  }

  getSpeciesById(id: string) {
    return this.http.get<ISpecies>(apiSpeciesUrl + '/' + id);
  }
}
