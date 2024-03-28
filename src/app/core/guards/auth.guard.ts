import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from '../services/cookie.service';
import { environment } from '../../../environments/environment';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  if(cookieService.get(environment.token)) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
