import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofmusicComponent } from './listofmusic.component';

describe('ListofmusicComponent', () => {
  let component: ListofmusicComponent;
  let fixture: ComponentFixture<ListofmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
