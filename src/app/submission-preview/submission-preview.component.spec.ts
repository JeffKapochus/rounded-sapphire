import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionPreviewComponent } from './submission-preview.component';

describe('SubmissionPreviewComponent', () => {
  let component: SubmissionPreviewComponent;
  let fixture: ComponentFixture<SubmissionPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
