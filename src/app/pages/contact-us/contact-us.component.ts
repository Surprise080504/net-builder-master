import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MainLayoutService } from '../../layout/main-layout/main-layout.service';
import { UserWithProfile } from '../../core/models/auth.model';
import { ToastrService } from '../../core/services/toastr.service';
import { ContactService } from '../../core/services/contact.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  user$ = this.authService.user$;
  user: UserWithProfile = {} as any;

  isLoading = false;

  form: FormGroup = this.fb.group({
    email: [this.user.email, [Validators.email, Validators.required]],
    id: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required]
  });

  private unsubscribeAll$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private mainLayoutService: MainLayoutService,
    private authService: AuthService,
    private contactService: ContactService,
    private toastr: ToastrService
  ) {
    this.mainLayoutService.showHeader('Contact Us', '/');
  }

  ngOnInit(): void {
    this.user$.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(user => {
        this.user = user as any;
        this.form.setValue({
          email: this.user.email,
          id: '',
          title: '',
          content: ''
        });
      });
  }

  ngOnDestroy() {
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }

  async contact() {
    try {
      this.isLoading = true;
      const value = this.form.value;
      await this.contactService.contactUs(value.email, value.id, value.title, value.content).toPromise();
      this.toastr.success('An email was sent successfully');
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }

}
