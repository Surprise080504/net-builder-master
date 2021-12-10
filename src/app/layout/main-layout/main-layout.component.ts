import { Component, OnInit } from '@angular/core';
import { MainLayoutService } from './main-layout.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  header$ = this.mainLayoutService.header$.asObservable();

  constructor(private mainLayoutService: MainLayoutService) {}

  ngOnInit(): void {}
}
