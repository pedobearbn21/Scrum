import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedailyComponent } from './savedaily.component';

describe('SavedailyComponent', () => {
  let component: SavedailyComponent;
  let fixture: ComponentFixture<SavedailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
