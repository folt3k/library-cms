import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { User } from "../../models/user";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) {
    this.user = this.authService.currentUser;
  }

  ngOnInit() {}

  get fullname(): string {
    return this.user.first_name + " " + this.user.last_name;
  }

  getUserTypeText(): string {
    if (this.user.is_staff) {
      return "Konto administratora";
    }
    if (this.user.is_reader) {
      return "Konto czytelnika";
    }
    return "Konto bibliotekarza";
  }
}
