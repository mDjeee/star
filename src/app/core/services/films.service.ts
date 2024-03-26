import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IFilm, IFilmResponse } from '../../shared/interfaces/films.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get<IFilmResponse>(environment.apiUrl + '/api/films');
  }

  getFilmById(id: string) {
    return this.http.get<IFilm>(environment.apiUrl + '/api/films/' + id);
  }
}
