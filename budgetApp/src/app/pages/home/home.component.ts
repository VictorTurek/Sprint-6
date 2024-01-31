import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProductOptionsComponent } from '../../components/product-options/product-options.component';
import { CurrentBudgetsComponent } from '../../components/current-budgets/current-budgets.component';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';
import { ServicesOfferedService } from '../../services/services-offered.service';
import { serviceType } from '../../types/serviceType';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductOptionsComponent, CurrentBudgetsComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {

  totalBudget: number = 0;
  showOptions: boolean = false;
  servicesAvailable: serviceType[] = [];
  user = {
    Nom: '',
    Telefon: '',
    Email: ''
  };

  constructor(private budgetService: BudgetService, private servicesOfferedService: ServicesOfferedService) { }

  ngOnInit(): void {
    this.servicesAvailable = this.servicesOfferedService.getServicesOffered();

    this.budgetService.getTotalBudget().subscribe((newTotalBudget) => {
      this.totalBudget = newTotalBudget;
    });
  }

  handleBudgetUpdate(updatedBudget: number) {
    this.totalBudget = updatedBudget;

    this.showBudgetRequest() // aprovecho la funcion para llamar a la funcion showBudgetRequest
  }

  showBudgetRequest() { // la funcion comprueba si hay algun checkbox marcado, y en ese caso, muetsra el div para solicitar presupuesto.
    this.showOptions = false 
    for (let i = 0; i < this.servicesAvailable.length; i++) {
      if (this.servicesAvailable[i].checked) {
        this.showOptions = true
      }
    }
  }






}
