import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit {
  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
  }

}
