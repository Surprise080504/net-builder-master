import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from '../../core/services/toastr.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accept-invite',
  templateUrl: './accept-invite.component.html',
  styleUrls: ['./accept-invite.component.scss']
})
export class AcceptInviteComponent implements OnInit {

  isLoading = false;
  invitorId = "";
  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.invitorId = this.route.snapshot.params.invitorId;
  }

  ngOnInit(): void {
  }

  async signup() {
    try {
      this.isLoading = true;
      const value = this.form.value;
      if(value.password == value.confirmPassword) {
        await this.authService.acceptInvite('first name', 'last name', value.email, value.password, this.invitorId).toPromise();
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
