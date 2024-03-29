import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  private destroyed = new Subject();
  private resizeSubscription!: Subscription;
  public isWindowSmall = false;

  openMenu() {

  }

  ngOnInit(): void {
    this.isWindowSmall = window.innerWidth < 768;
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(
        takeUntil(this.destroyed)
      )
      .subscribe(() => {
        this.isWindowSmall = window.innerWidth < 768;
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next(0);
    this.destroyed.complete();
  }

}
