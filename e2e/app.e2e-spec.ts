import { DPSChartsPage } from './app.po';

describe('dpscharts App', function() {
  let page: DPSChartsPage;

  beforeEach(() => {
    page = new DPSChartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
