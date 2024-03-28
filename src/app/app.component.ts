import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { fader, slider } from './animations/route-animations';

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
    fader,
    slider
  ]
})
export class AppComponent implements OnInit {
  title = 'Star Wars';

  constructor() {}

  ngOnInit(): void {
  }
}
