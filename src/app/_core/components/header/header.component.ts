import { Component, OnInit } from "@angular/core";

import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

  get username(): string {
    return this.authService.currentUser.username;
  }
}
