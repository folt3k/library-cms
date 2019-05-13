import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CoreModule } from '../_core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
