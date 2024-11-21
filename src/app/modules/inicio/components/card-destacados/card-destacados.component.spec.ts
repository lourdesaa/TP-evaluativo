import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestacadosComponent } from './card-destacados.component';

describe('CardDestacadosComponent', () => {
  let component: CardDestacadosComponent;
  let fixture: ComponentFixture<CardDestacadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestacadosComponent]
    });
    fixture = TestBed.createComponent(CardDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
