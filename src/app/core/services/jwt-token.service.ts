import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  jwtToken: string;
  decodedToken: { [key: string]: string };

  header = {
    alg: 'HS256',
    typ: 'JWT'
  }

  constructor() { }

  setToken(token: string) {
    if(token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if(this.jwtToken) {
      this.decodedToken = jwtDecode(this.jwtToken);
    }
  }

  encodeToken(user: any) {
    const encodedHeader = btoa(JSON.stringify(this.header));
    const encodedPayload = btoa(JSON.stringify(user));
    const signingInput = `${encodedHeader}.${encodedPayload}`;
    return signingInput;
  }

  getDecodeToken() {
    return jwtDecode(this.jwtToken);
  }

  getUser() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['email'] : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }
}
