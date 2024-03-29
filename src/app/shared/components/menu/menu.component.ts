import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject, Subscription, takeUntil } from 'rxjs';
import { ToggleService } from '../../../core/services/toggle.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, OnDestroy {
  private destroyed = new Subject();
  private resizeSubscription!: Subscription;
  public isWindowSmall = false;

  constructor(private toggleService: ToggleService) {
  }

  openMenu() {
    this.toggleService.isOpen.next(true);
  }

  ngOnInit(): void {
    this.isWindowSmall = window.innerWidth < 768;
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(
        takeUntil(this.destroyed)
      )
      .subscribe(() => {
        this.isWindowSmall = window.innerWidth < 768;
        if(!this.isWindowSmall) {
          this.toggleService.isOpen.next(false)
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next(0);
    this.destroyed.complete();
  }

}
