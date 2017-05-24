import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: any;

  constructor() { }

  ngOnInit() {
  }

  openLinkInBrowser() {
    window.open(this.feed.link);
  }
}
