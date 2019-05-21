import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { filter } from "rxjs/operators";

import { BooksService } from "../_core/services/books/books.service";
import { AddBookDialogComponent } from "./modals/add-book-dialog/add-book-dialog.component";
import { BorrowBookDialogComponent } from "./modals/borrow-book/borrow-book-dialog.component";
import { AlertService } from "../_core/services/alert/alert.service";
import { Book } from "../_core/models/book";
import { BookDetailsDialogComponent } from "./modals/book-details/book-details-dialog.component";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"]
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
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

  onPageChange({ pageIndex, pageSize }: { pageIndex: number; pageSize: number }) {
    const params = {
      page: pageIndex + 1,
      page_size: pageSize
    };

    this.updateFilters(params);
    this.loadBooks();
  }

  updateFilters(values: any) {
    this.filterParams = { ...this.filterParams, ...values };
  }

  onFiltersChange(data: any) {
    const params = {
      ...data
    };

    this.updateFilters(params);
    this.loadBooks();
  }

  openAddBookDialog() {
    const ref = this.modal.open(AddBookDialogComponent, {
      width: "800px"
    });

    ref
      .afterClosed()
      .pipe(filter(result => !!result))
      .subscribe(() => {
        this.alertService.open("Książka została pomyślnie dodana");
        this.loadBooks();
      });
  }

  openBorrowBookDialog(book: Book, event?: Event) {
    if (event) {
      event.stopPropagation();
    }

    const ref = this.modal.open(BorrowBookDialogComponent, {
      data: { book }
    });

    ref
      .afterClosed()
      .pipe(filter(result => !!result))
      .subscribe(() => {
        this.alertService.open("Książka została pomyślnie wypożyczona.");
        this.loadBooks();
      });
  }

  openBookDetailsDialog(book: Book) {
    const ref = this.modal.open(BookDetailsDialogComponent, {
      data: { book }
    });

    ref
      .afterClosed()
      .pipe(filter(result => !!result))
      .subscribe(() => {
        this.openBorrowBookDialog(book);
      });
  }
}
