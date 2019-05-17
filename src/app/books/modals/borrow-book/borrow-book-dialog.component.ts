import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { BorrowBookService } from "../../../_core/services/borrow-book/borrow-book.service";
import { AuthService } from "../../../_core/services/auth/auth.service";

@Component({
  selector: "app-borrow-dialog-book",
  templateUrl: "./borrow-book-dialog.component.html",
  styleUrls: ["./borrow-book-dialog.component.scss"]
})
export class BorrowBookDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BorrowBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private borrowBookService: BorrowBookService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  confirmBorrow() {
    const borrow = {
      book: this.data.book.id,
      borrower: this.authService.currentUser.id
    };

    this.borrowBookService.borrowBook(borrow).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
