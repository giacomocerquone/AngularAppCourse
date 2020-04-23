import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserResolver } from './user.resolver';
import { ProfileService } from '../profile/services/profile.service';

const routes = [
  {
    path: ':id',
    component: UserComponent,
    resolve: {
      profile: UserResolver,
    },
  },
];

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: [UserResolver, ProfileService],
})
export class UserModule {}
