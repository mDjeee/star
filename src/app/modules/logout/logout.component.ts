import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AuthFacade } from '../../store/auth/auth.facade';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
  constructor(private authFacade: AuthFacade) {
  }

  ngOnInit(): void {
    this.authFacade.logOut();
  }

}
