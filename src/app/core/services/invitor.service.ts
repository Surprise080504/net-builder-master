import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { UserWithProfile } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class InvitorService {
  constructor(
    private http: HttpClient
  ) {
  }

  getInvitorByLevel(level: number): Observable<UserWithProfile> {
    const url = `${environment.api}/auth/invitor/${level}`;
    return this.http.post<UserWithProfile>(url, null);
  }
}
