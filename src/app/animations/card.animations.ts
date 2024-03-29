import { animate, state, style, transition, trigger } from '@angular/animations';

export const cardRotate = trigger('cardRotateAnimation', [
  state('active', style({
    transform: 'rotateY(180deg)'
  })),
  state('inactive', style({
    transform: 'rotateY(0)'
  })),
  transition('active => inactive', animate('300ms ease-in-out')),
  transition('inactive => active', animate('300ms ease-in-out'))
]);
