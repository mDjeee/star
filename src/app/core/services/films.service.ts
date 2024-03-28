import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IFilm, IFilmResponse } from '../../shared/interfaces/films.interface';
import { apiFilmsUrl } from '../../../constants/endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(page: number = 1) {
    const query = page <=1 ? '' : `?page=${page}`
    return this.http.get<IFilmResponse>(apiFilmsUrl + query);
  }

  getFilmById(id: string) {
    return this.http.get<IFilm>(apiFilmsUrl + '/' + id);
  }
}
