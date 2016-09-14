import { BecompanyRssReaderWebpackPage } from './app.po';

describe('becompany-rss-reader-webpack App', function() {
  let page: BecompanyRssReaderWebpackPage;

  beforeEach(() => {
    page = new BecompanyRssReaderWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
