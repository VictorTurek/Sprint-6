import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProductOptionsComponent } from '../../components/product-options/product-options.component';
import { CurrentBudgetsComponent } from '../../components/current-budgets/current-budgets.component';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';
import { ServicesOfferedService } from '../../services/services-offered.service';
import { serviceType } from '../../types/serviceType';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductOptionsComponent, CurrentBudgetsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit{

  totalBudget: number = 0;
  objects: serviceType[] = [];

  constructor(private budgetService: BudgetService, private servicesOfferedService: ServicesOfferedService) {}

  ngOnInit(): void {
    this.objects = this.servicesOfferedService.servicesOffered;

    this.budgetService.getTotalBudget().subscribe((newTotalBudget) => {
      this.totalBudget = newTotalBudget;
    });
  }

}
