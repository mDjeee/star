import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  header = {
    alg: 'HS256',
    typ: 'JWT'
  }

  constructor(private cookieService: CookieService) { }

  setToken(token: string) {
    if(token) {
      this.cookieService.set('token17angular', token)
    }
  }

  encodeToken(user: any) {
    const encodedHeader = btoa(JSON.stringify(this.header));
    const encodedPayload = btoa(JSON.stringify(user));
    const signingInput = `${encodedHeader}.${encodedPayload}`;
    this.setToken(signingInput);
    return signingInput;
  }

  getDecodeToken() {
    const token = this.cookieService.get('token17angular');
    if(token) {
      return jwtDecode(token)
    }
    return null;
  }
}
