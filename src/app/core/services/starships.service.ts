import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiStarshipsUrl } from '../../../constants/endpoints.constants';
import { IStarship, IStarshipsResponse } from '../../shared/interfaces/starships.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarships(page: number) {
    const query = page <=1 ? '' : `?page=${page}`;
    return this.http.get<IStarshipsResponse>(apiStarshipsUrl + query);
  }

  getStarshipById(id: string) {
    return this.http.get<IStarship>(apiStarshipsUrl + '/' + id);
  }
}
