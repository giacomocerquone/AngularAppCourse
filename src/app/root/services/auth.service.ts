import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import endpoints from 'src/app/shared/endpoints';
import { User } from '../models/User';

import { tap } from 'rxjs/operators';

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
}
