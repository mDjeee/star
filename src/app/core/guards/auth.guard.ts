import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from '../services/cookie.service';
import { environment } from '../../../environments/environment';
import { AlertService } from '../services/alert.service';
import { AlertType } from '../../shared/enums/alert.enum';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);
  const toastService = inject(AlertService);

  if(cookieService.get(environment.token)) {
    return true;
  } else {
    toastService.setAlert({
      type: AlertType.danger,
      text: 'Unauthorized'
    })
    router.navigateByUrl('/login');
    return false;
  }
};
