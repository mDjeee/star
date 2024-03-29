import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';
import { IUser } from '../../shared/interfaces/user.interface';
import { CookieService } from './cookie.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AlertService } from './alert.service';
import { AlertType } from '../../shared/enums/alert.enum';
import { Observable, of } from 'rxjs';
import { AuthModel } from '../../store/auth/auth.model';
import { Store } from '@ngrx/store';
import { loadAuth } from '../../store/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private jwtTokenService: JwtTokenService,
    private cookieService: CookieService,
    private router: Router,
    private toastService: AlertService,
    private store: Store,
    ) { }

  signIn(user: IUser): Observable<AuthModel> {
    const token = this.jwtTokenService.encodeToken(user);
    this.router.navigateByUrl('/')
    this.toastService.setAlert({
      type: AlertType.success,
      text: 'Successfully logged in'
    });
    return of({ user, token, loading: false, error: '' });
  }

  logout(){
    this.cookieService.remove(environment.token);
    this.router.navigateByUrl('/login');
    return of({ user: null, token: null, loading: false, error: '' })
  }

  isLoggedIn() {
    const token = this.cookieService.get(environment.token);
    return !!token;
  }

  autoLogin() {
    const token = this.cookieService.get(environment.token);
    if(!!token) {
      const user = this.jwtTokenService.getDecodeToken();
      if(user) {
        this.store.dispatch(loadAuth({ loading:true, user }));
      }
    }
  }
}
