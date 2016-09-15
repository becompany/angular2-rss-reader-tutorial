import { FeedInfo } from './feed-info';
import { FeedEntry } from './feed-entry';

export interface Feed {
  status: string,
  feed: FeedInfo,
  items: Array<FeedEntry>
}
