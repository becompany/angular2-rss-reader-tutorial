import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { FeedService } from './feed.service';
import { FeedEntry } from './model/feed-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
  feeds: Array<FeedEntry> = [];

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.refreshFeed();
  }

  refreshFeed() {
    this.feeds.length = 0;
    // Adds 1s of delay to provide user's feedback.
    this.feedService.getFeedContent(this.feedUrl)
      .pipe(delay(1000))
      .subscribe(
        feed => this.feeds = feed.items,
        error => console.log(error));
  }

}
