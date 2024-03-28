import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { slideInAnimation } from './animations/route-animations';
import { ToastComponent } from './shared/components/toast/toast.component';
import { AlertService } from './core/services/alert.service';
import { AlertType } from './shared/enums/alert.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoreModule,
    ToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    slideInAnimation,
  ]
})
export class AppComponent implements OnInit {
  title = 'Star Wars';

  constructor(private toastService: AlertService) {}

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet.activatedRouteData['state'];
  }

  showToast(type: AlertType) {
    this.toastService.setAlert({
      type,
      text: 'This is test alert'
    })
  }
}
