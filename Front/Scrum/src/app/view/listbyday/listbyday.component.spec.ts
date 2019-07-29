import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbydayComponent } from './listbyday.component';

describe('ListbydayComponent', () => {
  let component: ListbydayComponent;
  let fixture: ComponentFixture<ListbydayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbydayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
