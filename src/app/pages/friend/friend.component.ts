import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MainLayoutService} from "../../layout/main-layout/main-layout.service";
import { Friend } from '../../core/models/friend.model';
import { FriendService } from '../../core/services/friend.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ToastrService } from '../../core/services/toastr.service';

enum UserDisplayType {
  All = 'ALL',
  Upgraded = 'UPGRADED'
}

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  UserDisplayType = UserDisplayType;

  friends: Friend[] = [];
  isLoading = false;
  level: number = 0;

  currentTab: UserDisplayType = UserDisplayType.All;

  searchForm: FormGroup = this.fb.group({
    keyword: ''
  });

  constructor(
    private route: ActivatedRoute,
    private mainLayoutService: MainLayoutService,
    private friendService: FriendService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {
    this.level = this.route.snapshot.params.level;
    this.mainLayoutService.showHeader('Level ' + this.level + ' Friend', '/');
  }

  ngOnInit(): void {
    this.loadFriends('');
    this.searchForm.get('keyword')?.valueChanges.pipe(
      debounceTime(600)
    ).subscribe(value => {
      this.loadFriends(value);
    });
  }

  private async loadFriends(keyword: string) {
    try {
      this.isLoading = true;
      this.friends = await this.friendService.getFriendsByLevel(this.level, keyword).toPromise();
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
