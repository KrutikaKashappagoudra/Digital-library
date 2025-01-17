import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Replace these with real credentials or a service call.
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (this.username === validUsername && this.password === validPassword) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }
}
