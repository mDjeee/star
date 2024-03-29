import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from '../services/cookie.service';
import { environment } from '../../../environments/environment';
import { AlertService } from '../services/alert.service';
import { AlertType } from '../../shared/enums/alert.enum';
import { ToggleService } from '../services/toggle.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);
  const toastService = inject(AlertService);
  const toggleService = inject(ToggleService);

  if(cookieService.get(environment.token)) {
    return true;
  } else {
    toastService.setAlert({
      type: AlertType.danger,
      text: 'Unauthorized'
    })
    toggleService.isOpen.next(false);
    router.navigateByUrl('/login');
    return false;
  }
};
