import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainLayoutService } from '../../../layout/main-layout/main-layout.service';
import { AuthService } from '../../../core/services/auth.service';
import { InvitorService } from '../../../core/services/invitor.service';
import { UserWithProfile } from '../../../core/models/auth.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from '../../../core/services/toastr.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {

  form: FormGroup = this.fb.group({
    transactionHash: ['', [Validators.required]]
  });

  user$ = this.authService.user$;
  user: UserWithProfile = {} as any;
  isLoading = false;
  invitor: UserWithProfile = {} as any;

  private unsubscribeAll$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private mainLayoutService: MainLayoutService,
    private authService: AuthService,
    private invitorService: InvitorService,
    private toastr: ToastrService
  ) {
    this.mainLayoutService.showHeader('Payment', '/upgrade');
  }

  ngOnInit(): void {
    this.user$.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(user => {
        this.user = user as any;
        this.getInvitorByLevel();
      });
  }

  ngOnDestroy() {
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }

  private async getInvitorByLevel() {
    try {
      this.isLoading = true;
      this.invitor = await this.invitorService.getInvitorByLevel(this.user.star + 1).toPromise();
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }

  async upgrade() {
    try {
      this.isLoading = true;
      const value = this.form.value;
      await this.authService.upgrade(value.transactionHash).toPromise();
      this.toastr.success('You are upgraded to ' + (this.user.star + 1) + ' star successfully. Thank you');
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }

  async copyText(e: any) {
    e.preventDefault();
  }
}
