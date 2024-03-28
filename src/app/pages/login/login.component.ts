import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { JwtTokenService } from '../../core/services/jwt-token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private jwtTokenService: JwtTokenService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted!', this.loginForm.value);
      const res = this.jwtTokenService.encodeToken(this.loginForm.value);
      console.log('token user', res);
    } else {
      console.log('Please fix errors in the form');
    }
  }
}
