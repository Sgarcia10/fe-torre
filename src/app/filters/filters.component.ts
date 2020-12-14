import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  languages = ['java', 'javascript'];
  types = ['full-time', 'part-time', 'internship', 'freelance'];
  filteredLanguages: Observable<string[]>;
  filterForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.filterForm = this.fb.group({
      language: new FormControl(),
      remote: new FormControl(),
      type: new FormControl(),
    });
    // tslint:disable-next-line: no-non-null-assertion
    this.filteredLanguages = this.filterForm.get('language')!.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  ngOnInit(): void {}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.languages.filter((language) =>
      language.toLowerCase().includes(filterValue)
    );
  }
}
