import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageMainComponent } from './blog-page-main.component';

describe('BlogPageMainComponent', () => {
  let component: BlogPageMainComponent;
  let fixture: ComponentFixture<BlogPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
