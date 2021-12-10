import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserWithProfile } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthResolver implements Resolve<UserWithProfile> {

  constructor(
    private authService: AuthService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserWithProfile> {
    return this.authService.getAuth();
  }
}
