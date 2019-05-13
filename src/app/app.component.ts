import { Component } from '@angular/core';
import { AuthService } from './_core/services/auth/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-cms';
  isLoginPage = true;

  constructor(private authService: AuthService) {
    this.authService.getUserInfo();
    this.authService.isAuthorized()
      .pipe(filter(authorized => !!authorized))
      .subscribe(() => this.isLoginPage = false);
  }
}
