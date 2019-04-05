import { browser, by, element } from 'protractor';

export class SearchPage {
  navigateTo() {
    return browser.get('/search');
  }

  getDateFromInput() {
    return element(by.css('.search-pitches__input-date-from'));
  }

  getDateToInput() {
    return element(by.css('.search-pitches__input-date-to'));
  }

  getForm() {
    return element(by.css('.search-pitches__form'));
  }

  getViewDetailsButton() {
    return element.all(by.css('.search-results__details')).first();
  }

  getBackButton() {
    return element.all(by.css('.search-details__back')).first();
  }
}
