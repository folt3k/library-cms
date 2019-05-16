import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filtersForm: FormGroup;
  bookCatOptions = [
    {
      "id": 1,
      "name": "Komedia"
    },
    {
      "id": 2,
      "name": "Horror"
    },
    {
      "id": 3,
      "name": "Powieść"
    }
  ];
  branchOptions = [
    {
      "id": 1,
      "name": "Filia nr 1 (Wrocławska 23/3)"
    },
  ]

  @Output() filtersChange = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.filtersForm = this.fb.group({
      search: [''],
      book_categories: [[]],
      library_branch: [[]],
    });
  }

  onFiltersChange() {
    this.filtersChange.emit(this.filtersForm.value);
  }

  resetForm() {
    this.filtersForm.reset({ search: '', book_categories: [], library_branch: [] });
    this.onFiltersChange();
  }

}
