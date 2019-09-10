import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app-routes';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserService } from './guards/user.service';


@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [
    RouterModule,
  ],
  providers: [AuthGuardService, UserService ]
})
export class AppRoutingModule { }
