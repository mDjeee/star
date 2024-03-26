import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { IFilm } from '../../interfaces/films.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card: any = undefined;

  @ContentChild('cardTitleTemplate') cardTitle: TemplateRef<any>;
  @ContentChild('cardSubTitleTemplate') cardSubTitle: TemplateRef<any>;
  @ContentChild('cardBodyTemplate') cardBody: TemplateRef<any>;
  @ContentChild('cardChipsTemplate') cardChips: TemplateRef<any>;
  @ContentChild('cardCaptionTemplate') cardCaption: TemplateRef<any>;
}
