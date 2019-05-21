import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { BorrowBookService } from "../../../_core/services/borrow-book/borrow-book.service";
import { AuthService } from "../../../_core/services/auth/auth.service";
import { Book } from 'src/app/_core/models/book';

@Component({
  selector: "app-borrow-dialog-book",
  templateUrl: "./borrow-book-dialog.component.html",
  styleUrls: ["./borrow-book-dialog.component.scss"]
})
export class BorrowBookDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BorrowBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: Book },
    private borrowBookService: BorrowBookService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  confirmBorrow() {
    this.borrowBookService.borrowBook(this.data.book).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
