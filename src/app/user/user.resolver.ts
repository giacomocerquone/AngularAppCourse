import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { ProfileService } from '../profile/services/profile.service';
import { User } from 'src/app/shared/models/User';

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private profile: ProfileService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.profile.getProfile(route.paramMap.get('username'));
  }
}
