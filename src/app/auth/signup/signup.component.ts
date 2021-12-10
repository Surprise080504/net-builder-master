import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from '../../core/services/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    invitees: [''],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  async signup() {
    try {
      this.isLoading = true;
      const value = this.form.value;
      if(value.password == value.confirmPassword) {
        await this.authService.signup('first name', 'last name', value.email, value.password, value.invitees).toPromise();
        this.router.navigate(['/']);
        this.toastr.success('You are registered successfully. Please try with it');
      } else {
        this.toastr.warning('Password is not match. Please try again');
      }
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
