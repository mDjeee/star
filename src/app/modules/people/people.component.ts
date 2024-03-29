import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PeopleFacade } from '../../store/people/people.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    SharedModule
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit {
  constructor(public peopleFacade: PeopleFacade, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const currentPage = parseInt(params['page'], 10) || 1;
      this.peopleFacade.fetchPeople(currentPage);
    })
  }

  pageChanged(page: number) {
    this.peopleFacade.fetchPeople(page);
  }
}
