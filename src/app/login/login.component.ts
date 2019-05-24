import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { AuthService } from "../_core/services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ["admin"],
      password: ["django123"]
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      result => {
        this.error = false;
        this.authService.storeToken(result.access);
        this.authService.getUserInfo();
      },
      () => (this.error = true)
    );
  }

  get isFormInvalid(): boolean {
    return this.loginForm.controls.username.value === "" || this.loginForm.controls.password.value === "";
  }
}
