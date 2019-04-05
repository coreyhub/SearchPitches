import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSearchButtonText() {
    return element(by.css('.search-pitches__submit')).getText();
  }
}
