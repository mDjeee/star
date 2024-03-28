import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PeopleFacade } from '../../store/people/people.facade';

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
  constructor(public peopleFacade: PeopleFacade) { }

  ngOnInit() {
    this.peopleFacade.fetchPeople(1);
  }

  pageChanged(page: number) {
    this.peopleFacade.fetchPeople(page);
  }
}
