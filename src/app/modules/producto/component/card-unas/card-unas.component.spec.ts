import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUnasComponent } from './card-unas.component';

describe('CardUnasComponent', () => {
  let component: CardUnasComponent;
  let fixture: ComponentFixture<CardUnasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUnasComponent]
    });
    fixture = TestBed.createComponent(CardUnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
