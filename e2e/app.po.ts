import { browser, element, by } from 'protractor/globals';

export class BecompanyRssReaderWebpackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root span.center')).getText();
  }
}
