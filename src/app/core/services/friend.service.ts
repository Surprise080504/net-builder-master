import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Friend } from '../models/friend.model';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  constructor(
    private http: HttpClient
  ) {
  }

  getFriends(): Observable<Friend[]> {
    const url = environment.api + '/auth/friends';
    return this.http.get<Friend[]>(url);
  }

  getFriendsByLevel(level: number, keyword: string): Observable<Friend[]> {
    const url = `${environment.api}/auth/friends/${level}`;
    return this.http.post<Friend[]>(url, { keyword });
  }
}
