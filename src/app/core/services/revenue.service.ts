import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Revenue } from '../models/revenue.model';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {
  constructor(
    private http: HttpClient
  ) {
  }

  getRevenue(): Observable<Revenue[]> {
    const url = `${environment.api}/transaction/to`;
    return this.http.get<Revenue[]>(url);
  }
}
