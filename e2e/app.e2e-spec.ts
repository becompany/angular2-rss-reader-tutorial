import { BecompanyRssReaderWebpackPage } from './app.po';

describe('becompany-rss-reader-webpack App', function() {
  let page: BecompanyRssReaderWebpackPage;

  beforeEach(() => {
    page = new BecompanyRssReaderWebpackPage();
  });

  it('should display "BeCompany news" message in the title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('BeCompany news');
  });
});
