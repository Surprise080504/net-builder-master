import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Header {
  title: string;
  pathBack: string;
}

@Injectable({
  providedIn: 'root'
})
export class MainLayoutService {

  header$: BehaviorSubject<Header | null> = new BehaviorSubject<Header | null>(null);

  constructor() { }

  showHeader(title: string, pathBack: string): void {
    this.header$.next({ title, pathBack });
  }

  hideHeader(): void {
    this.header$.next(null);
  }

}
