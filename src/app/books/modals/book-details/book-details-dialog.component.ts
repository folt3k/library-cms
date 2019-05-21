import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { Book } from 'src/app/_core/models/book';

@Component({
  selector: "app-book-details-dialog-book",
  templateUrl: "./book-details-dialog.component.html",
  styleUrls: ["./book-details-dialog.component.scss"]
})
export class BookDetailsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: Book },
  ) {}

  ngOnInit() {}

  get categories(): string {
    return this.data.book.book_categories.map(c => c.name).join(', ');
  }

  onBorrow() {
    this.dialogRef.close(true);
  }
}
