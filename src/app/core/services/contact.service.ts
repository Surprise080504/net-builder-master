import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SuccessResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(
    private http: HttpClient
  ) {
  }

  contactUs(email: string, id: string, title: string, content: string): Observable<SuccessResponse> {
    const url = `${environment.api}/contact/add`;
    return this.http.post<SuccessResponse>(url, { email, id, title, content });
  }
}
