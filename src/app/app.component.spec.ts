/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { MdCardModule, MdToolbarModule, MdButtonModule, MdIconModule, MdIconRegistry } from '@angular/material';

import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';

import { FeedService } from './feed.service';

describe('App: BeCompany RSS Reader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MdCardModule,
        MdToolbarModule,
        MdButtonModule,
        MdIconModule
      ],
      declarations: [
        AppComponent,
        FeedCardComponent,
        StripHtmlTagsPipe,
        SpinnerComponent
      ],
      providers: [FeedService, MdIconRegistry]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render "BeCompany news" in a span tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span.center').textContent).toContain('BeCompany news');
  }));
});
