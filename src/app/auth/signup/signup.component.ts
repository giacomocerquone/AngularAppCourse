import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/root/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email],
        this.auth.emailValidator(),
      ],
      username: ['', Validators.required, this.auth.usernameValidator()],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(signupForm: FormGroup) {
    this.auth
      .signup(
        signupForm.value.email,
        signupForm.value.username,
        signupForm.value.password
      )
      .subscribe({
        error: () => {
          alert('Errore durante la registrazione');
        },
      });
  }
}
