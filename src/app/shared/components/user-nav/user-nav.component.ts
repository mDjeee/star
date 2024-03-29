import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ToggleService } from '../../../core/services/toggle.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss'
})
export class UserNavComponent implements OnInit, OnDestroy {
  public isOpen = false;
  public destroyed = new Subject();
  constructor(private authService: AuthService, private toggleService: ToggleService) { }

  isLogged(): boolean {
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.toggleService.isOpen.pipe(
      takeUntil(this.destroyed)
    )
      .subscribe((value) => {
        this.isOpen = value;
      })
  }

  ngOnDestroy(): void {
    this.destroyed.next(1);
    this.destroyed.complete();
  }
}
