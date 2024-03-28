import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';
import { IUser } from '../../shared/interfaces/user.interface';
import { CookieService } from './cookie.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AlertService } from './alert.service';
import { AlertType } from '../../shared/enums/alert.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private jwtTokenService: JwtTokenService,
    private cookieService: CookieService,
    private router: Router,
    private toastService: AlertService,
    ) { }

  signIn(user: IUser) {
    this.jwtTokenService.encodeToken(user);
    this.router.navigateByUrl('/')
    this.toastService.setAlert({
      type: AlertType.success,
      text: 'Successfully logged in'
    })
  }

  logout(){
    this.cookieService.remove(environment.token);
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    const token = this.cookieService.get(environment.token);
    return !!token;
  }
}
