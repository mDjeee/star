import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';
import { IFilm, IFilmResponse } from '../../shared/interfaces/films.interface';
import { map, take } from 'rxjs';
import { IPaginateResponse } from '../../shared/interfaces/paginate.interface';
import { SharedModule } from '../../shared/shared.module';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [
    SharedModule,
    NgForOf
  ],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit {
  films: IFilm[] = [];
  constructor(private filmsService: FilmsService) {
  }
  ngOnInit(): void {
    this.filmsService.getFilms()
      .pipe(
        take(1)
      )
      .subscribe(
        (res: IPaginateResponse<IFilm>) => {
          this.films = res.results;
          console.log(res)
        }
      )
  }
}
