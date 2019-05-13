import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../_core/core.module';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    CoreModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
