import { SearchPage } from './search.po';
import { browser } from 'protractor';
import { url } from 'inspector';

describe('Search tests', () => {
  let page: SearchPage;

  beforeEach(() => {
    page = new SearchPage();
    page.navigateTo();
  });

  it('Search form should be valid', () => {
    page.getDateFromInput().sendKeys('04/04/2019');
    page.getDateToInput().sendKeys('11/04/2019');
    const form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-valid');
  });

  it('Should click first view details button', () => {
    page
      .getViewDetailsButton()
      .click()
      .then(function() {
        expect(browser.getCurrentUrl()).toEqual(
          browser.baseUrl +
            '/search/2401224?starts=2019-04-05T06:40:00%2B01:00&ends=2019-04-05T07:20:00%2B01:00&price=12.85&availabilities=3'
        );
      });
  });

  it('Should click back button', () => {
    page
      .getViewDetailsButton()
      .click()
      .then(function() {
        page
          .getBackButton()
          .click()
          .then(function() {
            expect(browser.getCurrentUrl()).toEqual(
              browser.baseUrl + '/search'
            );
          });
      });
  });
});
