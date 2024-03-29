import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { slideInAnimation } from './animations/route-animations';
import { ToastComponent } from './shared/components/toast/toast.component';
import { SharedModule } from './shared/shared.module';
import { ToggleService } from './core/services/toggle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoreModule,
    ToastComponent,
    SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    slideInAnimation,
  ]
})
export class AppComponent implements OnInit {
  title = 'Star Wars';
  isOpen: boolean = false;

  constructor(private toggleService: ToggleService) {}

  ngOnInit(): void {
    this.toggleService.isOpen.subscribe((value) => {
      this.isOpen = value;
    })
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet.activatedRouteData['state'];
  }

}
