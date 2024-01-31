import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-budgets',
  standalone: true,
  imports: [HomeComponent, CommonModule],
  templateUrl: './current-budgets.component.html',
  styleUrl: './current-budgets.component.sass'
})
export class CurrentBudgetsComponent {
  @Input() submittedBudgets: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['submittedBudgets'] && changes['submittedBudgets'].currentValue) {
      // Realiza acciones adicionales cuando submittedBudgets cambia
      console.log('submittedBudgets actualizado en el componente hijo:', this.submittedBudgets);
    }
  }

}
