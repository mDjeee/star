import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { slideInAnimation } from './animations/route-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoreModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    slideInAnimation,
  ]
})
export class AppComponent implements OnInit {
  title = 'Star Wars';

  constructor() {}

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet.activatedRouteData['state'];
  }
}
