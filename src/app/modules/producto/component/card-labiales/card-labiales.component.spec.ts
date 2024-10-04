import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLabialesComponent } from './card-labiales.component';

describe('CardLabialesComponent', () => {
  let component: CardLabialesComponent;
  let fixture: ComponentFixture<CardLabialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLabialesComponent]
    });
    fixture = TestBed.createComponent(CardLabialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
