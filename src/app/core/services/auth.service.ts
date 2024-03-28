import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';
import { IUser } from '../../shared/interfaces/user.interface';
import { CookieService } from './cookie.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private jwtTokenService: JwtTokenService,
    private cookieService: CookieService,
    private router: Router,
    ) { }

  signIn(user: IUser) {
    console.log('Form submitted!', user);
    const res = this.jwtTokenService.encodeToken(user);
    console.log('token user', res);
    const decoded = this.jwtTokenService.getDecodeToken();
    console.log(decoded)
    this.router.navigateByUrl('/')
  }

  logout(){
    this.cookieService.remove('token17angular');
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    const token = this.cookieService.get('token17angular');
    return !!token;
  }
}
