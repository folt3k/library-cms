import { Component } from "@angular/core";

import { AuthService } from "./_core/services/auth/auth.service";
import { DictsService } from "./_core/services/dicts/dicts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "library-cms";
  isAuthorized = false;
  loadingUser = true;
  loadingDicts = true;

  constructor(private authService: AuthService, private dictsService: DictsService) {
    this.authService.getUserInfo();
    this.authService
      .isAuthorized()
      .pipe()
      .subscribe(authorized => {
        if (authorized) {
          this.dictsService.queryDicts().then(() => {
            this.isAuthorized = true;
            this.loadingDicts = false;
            this.loadingUser = false;
          });
        } else {
          this.isAuthorized = false;
          this.loadingDicts = false;
          this.loadingUser = false;
        }
      });
  }

  get loading(): boolean {
    return this.loadingDicts || this.loadingUser;
  }
}
