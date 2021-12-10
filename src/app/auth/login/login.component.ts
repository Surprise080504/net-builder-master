import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from '../../core/services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  async login() {
    // this.toastr.error('Danger', 'This is a error message.');
    try {
      this.isLoading = true;
      const value = this.form.value;
      await this.authService.login(value.email, value.password).toPromise();
      this.router.navigate(['/']);
    } catch (e) {
      this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
