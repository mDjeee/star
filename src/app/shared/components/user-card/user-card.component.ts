import { Component, OnDestroy, OnInit } from '@angular/core';
import { JwtTokenService } from '../../../core/services/jwt-token.service';
import { IUser } from '../../interfaces/user.interface';
import { Store } from '@ngrx/store';
import { authSelector } from '../../../store/auth/auth.selector';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy {
  colors = [
    'bg-blue-600',
    'bg-green-600',
    'bg-yellow-600',
    'bg-red-600',
    'bg-indigo-600',
    'bg-purple-600',
    'bg-pink-600',
  ];

  title = '';
  user: IUser;
  initial: string;
  user$ = this.store.select(authSelector);
  destroyed = new Subject();

  constructor(private jwtService: JwtTokenService, private store: Store) {
  }

  ngOnInit(): void {
    this.user$.pipe(takeUntil(this.destroyed))
      .subscribe((val) => {
        if(val.user) {
          this.user = val.user;
          this.title = val.user.email;
          this.initial = this.user?.email?.slice(0,2) || '';
        }
      })
  }

  uniqueColor(): string {
    const str = `${this.user?.email}`;
    const sum = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return <string>this.colors.at(sum % this.colors.length);
  }

  ngOnDestroy(): void {
    this.destroyed.next(1);
    this.destroyed.complete();
  }
}
