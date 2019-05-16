import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { DictsService } from "src/app/_core/services/dicts/dicts.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  filtersForm: FormGroup;
  bookCatOptions = this.dictsService.getDict("book_categories");
  branchOptions = this.dictsService.getDict("library_branches");

  @Output() filtersChange = new EventEmitter();

  constructor(private fb: FormBuilder, private dictsService: DictsService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.filtersForm = this.fb.group({
      search: [""],
      book_categories: [[]],
      library_branch: [[]]
    });
  }

  onFiltersChange() {
    this.filtersChange.emit(this.filtersForm.value);
  }

  resetForm() {
    this.filtersForm.reset({ search: "", book_categories: [], library_branch: [] });
    this.onFiltersChange();
  }
}
