import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { LibraryBranchesService } from "src/app/_core/services/branches/library-branches.service";

@Component({
  selector: "app-add-branch-dialog",
  templateUrl: "./add-branch-dialog.component.html"
})
export class AddBranchDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddBranchDialogComponent>,
    private branchService: LibraryBranchesService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      address: ["", Validators.required],
      phone_number: ["", Validators.required]
    });
  }

  onSubmit() {
    this.branchService.addBranch(this.form.value).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
