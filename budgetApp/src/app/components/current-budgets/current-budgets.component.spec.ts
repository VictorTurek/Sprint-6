import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBudgetsComponent } from './current-budgets.component';

describe('CurrentBudgetsComponent', () => {
  let component: CurrentBudgetsComponent;
  let fixture: ComponentFixture<CurrentBudgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentBudgetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
