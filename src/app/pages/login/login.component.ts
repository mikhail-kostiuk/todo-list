import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  async onSubmit({ email, password }): Promise<boolean> {
    try {
      await this.authService.signIn(email, password);

      return this.router.navigate(['/todos']);
    } catch (err) {
      this.error = err.message;
    }
  }
}
