import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { CoreModule } from "../_core/core.module";
import { BooksComponent } from "./books.component";
import { BooksRoutingModule } from "./books-routing.module";
import { FiltersComponent } from "./filters/filters.component";
import { AddBookDialogComponent } from "./modals/add-book-dialog/add-book-dialog.component";
import { BorrowBookDialogComponent } from "./modals/borrow-book/borrow-book-dialog.component";
import { BookDetailsDialogComponent } from "./modals/book-details/book-details-dialog.component";

@NgModule({
  declarations: [
    BooksComponent,
    FiltersComponent,
    AddBookDialogComponent,
    BookDetailsDialogComponent,
    BorrowBookDialogComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, CoreModule, BooksRoutingModule],
  entryComponents: [AddBookDialogComponent, BorrowBookDialogComponent, BookDetailsDialogComponent]
})
export class BooksModule {}
