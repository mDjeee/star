import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../../../core/services/jwt-token.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {
  colors = [
    'bg-blue-600',
    'bg-green-600',
    'bg-yellow-600',
    'bg-red-600',
    'bg-indigo-600',
    'bg-purple-600',
    'bg-pink-600',
  ];

  user: IUser;
  initial: string;

  constructor(private jwtService: JwtTokenService) {
  }

  ngOnInit(): void {
    const decodeToken = this.jwtService.getDecodeToken();
    if(decodeToken) {
      this.user = decodeToken;
      this.initial = this.user.email.slice(0,2)
    }
  }

  uniqueColor(): string {
    const str = `${this.user.email}`;
    const sum = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return <string>this.colors.at(sum % this.colors.length);
  }
}
