import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    Route,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {
    constructor(private _router : Router, private _userService: UserService) {}

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(state.url == '/') {
        this._router.navigate(['/login'])
        return true;
      }else{
         return true;
      }

    }
}
