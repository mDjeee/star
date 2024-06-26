import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors, ValidatorFn,
  Validators
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthFacade } from '../../store/auth/auth.facade';
import { AlertService } from '../../core/services/alert.service';
import { AlertType } from '../../shared/enums/alert.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: AlertService,
    public authFacade: AuthFacade,
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.authFacade.fetchAuth(this.loginForm.value);
    } else {
      this.toastService.setAlert({
        type: AlertType.danger,
        text: 'Login Form does not valid'
      });
    }
  }
}
