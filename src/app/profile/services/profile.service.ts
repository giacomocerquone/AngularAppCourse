import { Injectable } from '@angular/core';
import { ProfileModule } from '../profile.module';
import endpoints from 'src/app/shared/endpoints';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  updateProfile(body) {
    return this.http.put(endpoints.update, { user: body });
  }
}
