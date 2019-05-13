import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatListModule, MatIconModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlInterceptor } from './interceptors/url.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';


const MATERIALS = [
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatTableModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ...MATERIALS,
  ],
  exports: [
    ...MATERIALS,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule { }
