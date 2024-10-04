import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRostroComponent } from './card-rostro.component';

describe('CardRostroComponent', () => {
  let component: CardRostroComponent;
  let fixture: ComponentFixture<CardRostroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRostroComponent]
    });
    fixture = TestBed.createComponent(CardRostroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
