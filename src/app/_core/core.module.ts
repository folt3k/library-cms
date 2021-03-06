import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDialogModule,
  MatMenuModule,
  MatSnackBarModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { UrlInterceptor } from "./interceptors/url.interceptor";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SearchComponent } from "./components/forms/search/search.component";
import { HeaderComponent } from "./components/header/header.component";

const COMPONENTS = [SidebarComponent, SearchComponent, HeaderComponent];

const MATERIALS = [
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDialogModule,
  MatMenuModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RouterModule, ...MATERIALS],
  exports: [...MATERIALS, ...COMPONENTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
