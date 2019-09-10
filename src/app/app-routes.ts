import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { AuthGuardService } from './guards/auth-guard.service';


export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '**', component: NotFoundComponent,
    canActivate: [AuthGuardService]
  },
];
