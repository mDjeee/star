import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.scss'
})
export class BaseButtonComponent {
  @ContentChild('buttonContentTemplate') buttonContent: TemplateRef<any>;
}
