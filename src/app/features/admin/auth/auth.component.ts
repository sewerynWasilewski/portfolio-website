import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AuthService, LoginRequest } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  authForm = this.fb.nonNullable.group({
    email: '',
    password: '',
  });

  onSubmit(): void {
    const formData = this.authForm.getRawValue();

    const loginForm: LoginRequest = {
      email: formData.email,
      password: formData.password,
    };

    this.authService.login(loginForm).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Login error:', error);
      },
    });
  }
}