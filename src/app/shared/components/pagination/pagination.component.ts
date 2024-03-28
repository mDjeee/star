import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  @Input() count: number | null;
  @Input() next: string | null | undefined;
  @Input() previous: string | null | undefined;
  @Input() loading: boolean | null = false;
  @Output() emitPage = new EventEmitter<number>();
  currentPage: number | undefined;

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
    const pages = count ? Math.ceil(count/10) : 1;
    return Array(pages).fill(0);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentPage = parseInt(params['page'], 10) || 1;
      this.emitPage.emit(this.currentPage);
    })
  }

}
