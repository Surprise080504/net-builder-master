import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from '../../core/services/toastr.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    code: ['', Validators.required]
  });

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  async resetPassword() {
    try {
      this.isLoading = true;
      const value = this.form.value;
      if(value.password == value.confirmPassword) {
        await this.authService.resetPassword(value.email, value.password, value.code).toPromise();
        this.toastr.success('New password was set successfully. Please try with it');
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
      await this.authService.getForgotPasswordCode(value.email).toPromise();
      this.toastr.success('Code has been arrived through email. Please check your inbox');
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }

}
