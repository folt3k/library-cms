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
  searchForm: FormGroup;
  bookCatOptions = this.dictsService.getDict("book_categories");
  branchOptions = this.dictsService.getDict("library_branches");

  @Output() filtersChange = new EventEmitter();

  constructor(private fb: FormBuilder, private dictsService: DictsService) {}

  ngOnInit() {
    this.initForms();
  }

  initForms() {
    this.filtersForm = this.fb.group({
      book_categories: [[]],
      library_branch: [[]]
    });

    this.searchForm = this.fb.group({
      search: [""]
    });

    this.filtersForm.valueChanges.subscribe(values => {
      this.onFiltersChange(values);
    });
  }

  onFiltersChange(values: any) {
    this.filtersChange.emit({ ...values, ...this.searchForm.value });
  }

  onSearch() {
    this.filtersChange.emit({ ...this.filtersForm.value, ...this.searchForm.value });
  }

  resetFilters() {
    this.filtersForm.reset({ book_categories: [], library_branch: [] });
    this.onFiltersChange({ ...this.filtersForm.value });
  }
}
