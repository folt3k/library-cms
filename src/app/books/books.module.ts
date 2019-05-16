import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../_core/core.module';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { FiltersComponent } from './filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksComponent, FiltersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
