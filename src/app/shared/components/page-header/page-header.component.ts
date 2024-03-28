import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input() model: any;
  @Input() title: string;
  @Output() pageChanged = new EventEmitter<number>();

  changePage(page: number) {
    this.pageChanged.emit(page);
  }
}
