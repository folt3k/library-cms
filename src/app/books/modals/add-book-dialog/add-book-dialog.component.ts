import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DictsService } from "src/app/_core/services/dicts/dicts.service";
import { BooksService } from "src/app/_core/services/books/books.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-book-dialog",
  templateUrl: "./add-book-dialog.component.html",
  styleUrls: ["./add-book-dialog.component.scss"]
})
export class AddBookDialogComponent implements OnInit {
  form: FormGroup;
  options = {
    library_branches: this.dictsService.getDict("library_branches"),
    book_categories: this.dictsService.getDict("book_categories"),
    authors: this.dictsService.getDict("authors")
  };

  constructor(
    private fb: FormBuilder,
    private dictsService: DictsService,
    private booksService: BooksService,
    public dialogRef: MatDialogRef<AddBookDialogComponent>
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      title: ["", Validators.required],
      pages_count: ["", Validators.required],
      publish_year: ["", Validators.required],
      library_branch: ["", Validators.required],
      book_categories: [[], Validators.required],
      author: ["", Validators.required]
    });
  }

  onSubmit() {
    this.booksService.addBook(this.form.value).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
