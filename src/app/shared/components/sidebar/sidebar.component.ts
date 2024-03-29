import { Component } from '@angular/core';
import { ToggleService } from '../../../core/services/toggle.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('slideInOut', [
      state(':enter', style({
        transform: 'translate3d(0,0,0)'
      })),
      state(':leave', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidebarComponent {
  constructor(private toggleService: ToggleService) {
  }
  closeSideBar() {
    this.toggleService.isOpen.next(false);
  }
}
