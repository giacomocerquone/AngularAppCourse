import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../root/services/auth.service';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  updateUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private profile: ProfileService
  ) {}

  ngOnInit(): void {
    const { email, username, bio } = this.auth.currentUser;

    this.updateUserForm = this.fb.group({
      email: [email, [Validators.required, Validators.email]],
      username: [username, Validators.required, this.auth.usernameValidator()],
      bio: [bio],
    });
  }

  onSubmit(updateUserForm: FormGroup) {
    this.profile.updateProfile(updateUserForm);
  }

  onReset() {
    const { email, username, bio } = this.auth.currentUser;
    this.updateUserForm.reset({ email, username, bio });
  }
}
