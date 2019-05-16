import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  @Input() name: string;
  @Output() onSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickSearch() {
    this.onSearch.emit();
  }

  get isValue() {
    return !!this.parentFormGroup.controls[this.name].value;
  }

  clearValue() {
    this.parentFormGroup.patchValue({ [this.name]: '' });
    this.onSearch.emit();
  }

}
