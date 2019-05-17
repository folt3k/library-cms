import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { filter } from "rxjs/operators";

import { BooksService } from "../_core/services/books/books.service";
import { AddBookDialogComponent } from "./modals/add-book-dialog/add-book-dialog.component";
import { BorrowBookDialogComponent } from "./modals/borrow-book/borrow-book-dialog.component";
import { AlertService } from "../_core/services/alert/alert.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"]
})
export class BooksComponent implements OnInit {
  books = [];
  pagination = {};
  displayedColumns = ["id", "title", "author", "publish_year", "library_branch", "controls"];
  filterParams = {};

  constructor(private booksService: BooksService, public modal: MatDialog, private alertService: AlertService) {}

  ngOnInit() {
    this.loadBooks();
  }

  async loadBooks() {
    const books = await this.booksService.queryBooks(this.filterParams);
    this.books = books.results;
    this.pagination = books.pagination;
  }

  onPageChange({ pageIndex, pageSize }) {
    const params = {
      page: pageIndex + 1,
      page_size: pageSize
    };

    this.updateFilters(params);
    this.loadBooks();
  }

  updateFilters(values) {
    this.filterParams = { ...this.filterParams, ...values };
  }

  onFiltersChange(data) {
    const params = {
      ...data
    };

    this.updateFilters(params);
    this.loadBooks();
  }

  openAddBookDialog() {
    this.modal.open(AddBookDialogComponent, {
      width: "800px"
    });
  }

  openBorrowBookDialog(book) {
    const ref = this.modal.open(BorrowBookDialogComponent, {
      data: { book }
    });

    ref
      .afterClosed()
      .pipe(filter(result => !!result))
      .subscribe(() => {
        this.alertService.open('Książka została pomyślnie wypożyczona.');
        this.loadBooks();
      });
  }
}
