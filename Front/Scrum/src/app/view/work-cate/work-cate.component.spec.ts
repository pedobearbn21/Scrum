import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCateComponent } from './work-cate.component';

describe('WorkCateComponent', () => {
  let component: WorkCateComponent;
  let fixture: ComponentFixture<WorkCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
