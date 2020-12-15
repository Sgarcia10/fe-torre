import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Types } from '../constants/types.constant';
import { TorreParams } from '../dtos/request/torreParams.dto';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  languages = ['java', 'javascript'];
  types = Types;
  filteredLanguages: Observable<string[]>;
  filterForm: FormGroup;

  @Output() findJobsEvent = new EventEmitter<TorreParams>();

  constructor(public fb: FormBuilder) {
    this.filterForm = this.fb.group({
      language: new FormControl('', [Validators.required]),
      remote: new FormControl(),
      type: new FormControl()
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

    return this.languages.filter((language) => language.toLowerCase().includes(filterValue));
  }

  search() {
    const language = this.filterForm.get('language')?.value;
    const remote = this.filterForm.get('remote')?.value;
    const type = this.filterForm.get('type')?.value;
    const params = new TorreParams();
    params.language = language;
    params.remote = String(remote);
    params.type = type ?? '';

    this.findJobsEvent.emit(params);
  }
}
