import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// for apiService testing if I had more time
// import { ApiService } from '../core/api.service';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let fixtureElement: HTMLElement;
  let apiServiceSpy;

  // create new instance of FormBuilder
  const formBuilderMock: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['getSlots']);

    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        RouterModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilderMock }
        // required for creating objectSpy for api service if I had more time
        // { provide: ApiService, useValue: apiServiceSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixtureElement = fixture.nativeElement;

    // pass in the form dynamically
    component.searchPitchesForm = formBuilderMock.group({
      dateFrom: '2019-04-04',
      dateTo: '2019-04-08'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on Init', () => {
    beforeEach(() => {
      spyOn(component, 'ngOnInit').and.callThrough();
      component.ngOnInit();
    });

    it('should be called', () => {
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });

  it('should render the date from placeholder text', () => {
    const dateFromPlaceholder = fixtureElement
      .querySelector('.search-pitches__input-date-from')
      .getAttribute('placeholder');
    expect(dateFromPlaceholder).toEqual('Date from');
  });

  it('should render the date to placeholder text', () => {
    const dateToPlaceholder = fixtureElement
      .querySelector('.search-pitches__input-date-to')
      .getAttribute('placeholder');
    expect(dateToPlaceholder).toEqual('Date to');
  });

  it('should render the search button text', () => {
    const searchButton = fixtureElement.querySelector(
      '.search-pitches__submit'
    );
    expect(searchButton.textContent.trim()).toEqual('Search');
  });

  describe('when the search button is click', () => {
    it('should call onSubmit function', () => {
      spyOn(component, 'onSubmit');
      fixture.debugElement
        .query(By.css('form'))
        .triggerEventHandler('ngSubmit', null);
      fixture.detectChanges();
      expect(component.onSubmit).toHaveBeenCalled();
    });

    it('should call getSlotMoment function', () => {
      spyOn(component, 'getSlotMoment');
      fixture.debugElement
        .query(By.css('form'))
        .triggerEventHandler('ngSubmit', null);
      fixture.detectChanges();
      expect(component.getSlotMoment).toHaveBeenCalled();
    });
  });
});
