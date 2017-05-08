/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { FeedCardComponent } from './feed-card.component';
import { DebugElement }    from '@angular/core';

import { MdCardModule } from '@angular/material';

import { StripHtmlTagsPipe } from '../pipe/strip-html-tags.pipe';

let comp:      FeedCardComponent;
let fixture:   ComponentFixture<FeedCardComponent>;
let el:        DebugElement;

describe('Component: FeedCard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MdCardModule],
      declarations: [FeedCardComponent, StripHtmlTagsPipe], // declare the test component
    });

    fixture = TestBed.createComponent(FeedCardComponent);

    comp = fixture.componentInstance; // FeedCardComponent test instance

    // get title DebugElement by element name
    el = fixture.debugElement.query(By.css('md-card-title'));
  });

  it('should create an instance', () => {
    let component = new FeedCardComponent();
    expect(component).toBeTruthy();
  });

  it('should contains the feed values passed by argument', () => {
    comp.feed = {
      title: 'TEST title',
      author: 'TEST author',
      pubDate: new Date(),
      description: 'TEST description'
    };
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toContain('TEST title');
  });
});
