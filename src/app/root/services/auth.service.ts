import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import endpoints from 'src/app/shared/endpoints';
import { User } from '../models/User';

import { tap, catchError } from 'rxjs/operators';
import {
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  login(email, password) {
    return this.http.post(endpoints.login, { user: { email, password } }).pipe(
      tap((res: any) => {
        if (res.user) {
          localStorage.setItem('loggedInUser', JSON.stringify(res.user));
        }
      })
    );
  }

  signup(email, password, username) {
    return this.http.post(endpoints.signup, {
      user: { email, password, username },
    });
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.currentUser = null;
  }

  emailValidator(): AsyncValidatorFn {
    return (
      ctrl: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      return this.signup(ctrl.value, '', '').pipe(
        catchError((err) => {
          if (err?.error?.errors?.email?.[0] === 'has already been taken') {
            return of({ emailTaken: true });
          }
          return of(null);
        })
      );
    };
  }

  usernameValidator(): AsyncValidatorFn {
    return (
      ctrl: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      return this.signup('', '', ctrl.value).pipe(
        catchError((err) => {
          if (err?.error?.errors?.username?.[0] === 'has already been taken') {
            return of({ usernameTaken: true });
          }
          return of(null);
        })
      );
    };
  }
}
