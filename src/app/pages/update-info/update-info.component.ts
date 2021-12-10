import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MainLayoutService } from '../../layout/main-layout/main-layout.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from '../../core/services/toastr.service';
import { UserWithProfile } from '../../core/models/auth.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent implements OnInit {

  user$ = this.authService.user$;
  user: UserWithProfile = {} as any;
  isLoading = false;
  form: FormGroup = this.fb.group({
    email: [this.user.email, [Validators.email, Validators.required]],
    walletAddress: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    code: ['', Validators.required]
  });

  private unsubscribeAll$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private mainLayoutService: MainLayoutService,
    private authService: AuthService,
    private toastr: ToastrService,
  ) {
    this.mainLayoutService.showHeader('Update Info', '/');
  }

  ngOnInit(): void {
    this.user$.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(user => {
        this.user = user as any;
        this.form.setValue({
          email: this.user.email,
          walletAddress: this.user.walletAddress,
          password: '',
          confirmPassword: '',
          code: ''
        });
      });
  }

  ngOnDestroy() {
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }


  async updateInfo() {
    try {
      this.isLoading = true;
      const value = this.form.value;
      if(value.password == value.confirmPassword) {
        await this.authService.updateUser(value.email, value.walletAddress, value.password, value.code).toPromise();
        this.toastr.success('User information was updated successfully. Please try with it');
      } else {
        this.toastr.warning('Password is not match. Please try again');
      }
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }

  async requestVerificationCode(e: any) {
    e.preventDefault();
    try {
      this.isLoading = true;
      const value = this.form.value;
      await this.authService.getUpdateInfoCode(value.email).toPromise();
      this.toastr.success('Code has been arrived through email. Please check your inbox');
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }

}
