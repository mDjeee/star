import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { fadeInOut } from '../../../animations/fade-in-out.animations';
import { cardRotate } from '../../../animations/card.animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [fadeInOut, cardRotate]
})
export class CardComponent {
  @Input() card: any = undefined;

  @ContentChild('cardTitleTemplate') cardTitle: TemplateRef<any>;
  @ContentChild('cardSubTitleTemplate') cardSubTitle: TemplateRef<any>;
  @ContentChild('cardBodyTemplate') cardBody: TemplateRef<any>;
  @ContentChild('cardChipsTemplate') cardChips: TemplateRef<any>;
  @ContentChild('cardCaptionTemplate') cardCaption: TemplateRef<any>;

  state: string = 'inactive'

  toggleCard() {
    this.state = (this.state == 'inactive') ? 'active' : 'inactive';
  }
}
