import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from '../services/cookie.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  if(cookieService.get('token17')) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
