import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { SearchDetailsComponent } from './search-details.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteMock } from 'src/app/shared/tests/mocks/activated-route.mock';
import { By } from '@angular/platform-browser';

describe('SearchDetailsComponent', () => {
  let component: SearchDetailsComponent;
  let fixture: ComponentFixture<SearchDetailsComponent>;
  let fixtureElement: HTMLElement;
  let activatedRoute;
  let locationSpy;

  beforeEach(async(() => {
    locationSpy = jasmine.createSpyObj('Location', ['back']);

    TestBed.configureTestingModule({
      declarations: [SearchDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: Location, useValue: locationSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailsComponent);
    component = fixture.componentInstance;
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    activatedRoute.testParams = { id: '2396160' };
    activatedRoute.testQueryParamMap = { price: '12.50', availabilities: '4' };
    fixtureElement = fixture.nativeElement;
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

    it('should give correct value for parameter id', fakeAsync(() => {
      component.ngOnInit();
      tick();
      expect(component.id).toBe('2396160');
    }));

    it('should give correct value for parameter price', fakeAsync(() => {
      component.ngOnInit();
      tick();
      expect(component.price).toBe('12.50');
    }));

    it('should give correct value for parameter availabilities', fakeAsync(() => {
      component.ngOnInit();
      tick();
      expect(component.availabilities).toBe('4');
    }));
  });

  describe('when the back button is click', () => {
    it('should call back function', () => {
      spyOn(component, 'back');
      fixture.debugElement
        .query(By.css('.search-details__back'))
        .triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.back).toHaveBeenCalled();
    });
  });
});
