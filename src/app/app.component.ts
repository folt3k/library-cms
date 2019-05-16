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
  isAuthorized = false;
  loading = true;

  constructor(private authService: AuthService) {
    this.authService.getUserInfo();
    this.authService.isAuthorized()
      .pipe()
      .subscribe((authorized) => {
        if(authorized) {
          this.isAuthorized = true;
        } else {
          this.isAuthorized = false;
        }
        this.loading = false;
      });
  }
}
