import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import * as moment from 'moment';

import { Slot } from '../shared/models/slots.model';
import { ApiService } from '../core/api.service';

export const DD_MM_YYYY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

/**
 * @Search: A component to chooses date from to date to for a
 * range of available pitches
 */
@Component({
  selector: 'sp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchPitchesForm: FormGroup;
  dateFromValue: string;
  dateToValue: string;
  dateNow: Object;
  slotList: Slot[];
  errorEvent: string;

  constructor(
    public formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.searchPitchesForm = this.formBuilder.group({
      dateFrom: new FormControl(moment(), Validators.required),
      dateTo: new FormControl(moment(), Validators.required)
    });

    this.dateNow = moment();
    this.inputDateFrom(this.dateNow);
    this.getSlotMoment();
  }

  /**
   * This is the InputDateFrom function where user passes
   *  the datefrom selection from the datepicker
   * @param dateFromEvent This is the dateFrom parameter
   * @returns returns nothing
   */
  inputDateFrom(dateFromEvent): void {
    this.dateFromValue = moment(dateFromEvent.value).format('YYYY-MM-DD');
  }

  /**
   * This is the onSubmit function which is called
   * after user clicks the search button
   * @returns returns nothing
   */
  onSubmit(): void {
    this.getSlotMoment();
  }

  /**
   * This is the getSlotMoment function
   * which takes the datefrom selection and dateto selections
   * and make a call to getSlots function
   * @returns nothing
   */
  getSlotMoment(): void {
    const dateFromName = moment(this.searchPitchesForm.value.dateFrom).format(
      'YYYY-MM-DD'
    );
    const dateToName = moment(this.searchPitchesForm.value.dateTo).format(
      'YYYY-MM-DD'
    );

    this.apiService.getSlots(dateFromName, dateToName).subscribe(
      response => {
        this.slotList = response;
      },
      error => {
        this.errorEvent = error;
      }
    );
  }
}
