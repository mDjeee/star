import { Component, Input } from '@angular/core';
import { IFilm } from '../../interfaces/films.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card: IFilm | undefined = undefined;
}
