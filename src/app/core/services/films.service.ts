import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get(environment.apiUrl + '/api/people');
  }

  getFilmById(id: string) {
    return this.http.get(environment.apiUrl + '/api/people/' + id);
  }
}
