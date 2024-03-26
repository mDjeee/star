import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';
import { take } from 'rxjs';
import { IPeopleResponse, IPerson } from '../../shared/interfaces/people.interface';
import { NgForOf, NgIf } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

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
  people: IPerson[] = [];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.peopleService.getPeople()
      .pipe(
        take(1)
      )
      .subscribe((res: IPeopleResponse) => {
        this.people = res.results
      })
  }

  protected readonly Object = Object;
}
