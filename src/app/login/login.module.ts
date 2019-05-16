import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login.component";
import { CoreModule } from "../_core/core.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, CoreModule, ReactiveFormsModule],
  exports: [LoginComponent]
})
export class LoginModule {}
