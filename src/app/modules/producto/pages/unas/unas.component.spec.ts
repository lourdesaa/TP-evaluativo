import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnasComponent } from './unas.component';

describe('UnasComponent', () => {
  let component: UnasComponent;
  let fixture: ComponentFixture<UnasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnasComponent]
    });
    fixture = TestBed.createComponent(UnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
