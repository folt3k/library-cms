import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreModule } from "../_core/core.module";
import { BooksComponent } from "./books.component";
import { BooksRoutingModule } from "./books-routing.module";
import { FiltersComponent } from "./filters/filters.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AddBookDialogComponent } from "./modals/add-book-dialog/add-book-dialog.component";

@NgModule({
  declarations: [BooksComponent, FiltersComponent, AddBookDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, CoreModule, BooksRoutingModule],
  entryComponents: [AddBookDialogComponent]
})
export class BooksModule {}
