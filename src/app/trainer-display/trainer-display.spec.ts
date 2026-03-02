import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDisplay } from './trainer-display';

describe('TrainerDisplay', () => {
  let component: TrainerDisplay;
  let fixture: ComponentFixture<TrainerDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
