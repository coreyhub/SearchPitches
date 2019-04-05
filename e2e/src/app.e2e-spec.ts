import { AppPage } from './app.po';

describe('Initial Search App load', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render the date from search button text', () => {
    page.navigateTo();
    expect(page.getSearchButtonText()).toEqual('Search');
  });

  // would have
  // there are how many slots
  // list of slots
  // filter
  // current url should be http://localhost:4200/search
  // if click on view details, should see
  // new url http://localhost:4200/search/?
  // 2396162
  // Price - 10.60
  // Availability - 0
  // Back
});
