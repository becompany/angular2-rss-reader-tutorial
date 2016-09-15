import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
  private feeds: any;

  constructor (
    private feedService: FeedService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }

}
