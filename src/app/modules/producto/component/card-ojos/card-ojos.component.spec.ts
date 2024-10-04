import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOjosComponent } from './card-ojos.component';

describe('CardOjosComponent', () => {
  let component: CardOjosComponent;
  let fixture: ComponentFixture<CardOjosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOjosComponent]
    });
    fixture = TestBed.createComponent(CardOjosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
