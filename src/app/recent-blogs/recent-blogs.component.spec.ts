import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBlogsComponent } from './recent-blogs.component';

describe('RecentBlogsComponent', () => {
  let component: RecentBlogsComponent;
  let fixture: ComponentFixture<RecentBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
