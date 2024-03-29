import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit, OnDestroy {
  @Input() count: number | null;
  @Input() next: string | null | undefined;
  @Input() previous: string | null | undefined;
  @Input() loading: boolean | null = false;
  @Output() emitPage = new EventEmitter<number>();
  public currentPage: number | undefined;
  private isWindowSmall: boolean = false;
  private resizeSubscription!: Subscription;
  private destroyed = new Subject()


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
  }

  changePage(page: any) {
    const pageParams = page <= 1 ? {} : { page }
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: pageParams,
      }
    )
  }

  createPages(count: number | null) {
    if(this.isWindowSmall) {
      return [];
    }
    const pages = count ? Math.ceil(count/10) : 1;
    return Array(pages).fill(0);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentPage = parseInt(params['page'], 10) || 1;
      this.emitPage.emit(this.currentPage);
    })

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
