import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';


export const slideInAnimation = trigger('slideInAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({
      position: 'fixed',
      width: '100%',
      height: '100%'
    }), { optional: true }),

    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),

      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.3s ease-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
])

