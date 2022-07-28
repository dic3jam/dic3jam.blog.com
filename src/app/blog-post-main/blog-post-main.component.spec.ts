import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMainComponent } from './blog-post-main.component';

describe('BlogPostMainComponent', () => {
  let component: BlogPostMainComponent;
  let fixture: ComponentFixture<BlogPostMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
