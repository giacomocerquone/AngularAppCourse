import { Injectable } from '@angular/core';
import endpoints from 'src/app/shared/endpoints';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/User';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  updateProfile(body) {
    return this.http.put(endpoints.update, { user: body });
  }

  getProfile(username) {
    return this.http.get(`${endpoints.profiles}/${username}`).pipe(
      map((res: { profile: User }) => {
        return res.profile;
      })
    );
  }
}
