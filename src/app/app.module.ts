import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserService } from './guards/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-app' }),
    AppRoutingModule,
  ],
  providers: [ AuthGuardService, UserService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
