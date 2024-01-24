import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProductOptionsComponent } from '../../components/product-options/product-options.component';
import { CurrentBudgetsComponent } from '../../components/current-budgets/current-budgets.component';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductOptionsComponent, CurrentBudgetsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  
  objects = [
    { title: 'SEO', description: "Analisis SEO d'una pagina web", price: 300 },
    { title: 'Ads', description: "Creacio d'una campanya de publicitat", price: 400 },
    { title: 'Web', description: "Programacio d'una web responsive", price: 500 },
  ];

  totalBudget: number = 0;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.getTotalBudget().subscribe((newTotalBudget) => {
      this.totalBudget = newTotalBudget;
    });
  }

}
