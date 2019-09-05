import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdescriptionComponent } from './listdescription.component';

describe('ListdescriptionComponent', () => {
  let component: ListdescriptionComponent;
  let fixture: ComponentFixture<ListdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
