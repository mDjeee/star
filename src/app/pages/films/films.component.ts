import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit {

  constructor(private filmsService: FilmsService) {
  }
  ngOnInit(): void {
    this.filmsService.getFilms().subscribe((res) => {
      console.log(res);
    })
  }
}
