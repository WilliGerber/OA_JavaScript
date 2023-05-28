import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/core/auth/auth.service';
// import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent {
  public signinForm!: FormGroup;
  public loading: boolean = false;
  public hide = true;


  constructor(
    private formBuilder: FormBuilder) { }

  ngOninit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }); 
  }

  login() {
    const email = this.signinForm.get('email')!.value;
    const password = this.signinForm.get('password')!.value;
}
}
