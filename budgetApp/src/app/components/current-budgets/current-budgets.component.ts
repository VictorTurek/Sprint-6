import { Component, Input} from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-current-budgets',
  standalone: true,
  imports: [HomeComponent, CommonModule, FormsModule],
  templateUrl: './current-budgets.component.html',
  styleUrl: './current-budgets.component.sass'
})
export class CurrentBudgetsComponent {
  @Input() submittedBudgets: any[] = [];

  searchTerm: string = ''; // Variable de estado para el término de búsqueda
  ascendingOrder: boolean = true; // Variable de estado para el orden
  ascendingOrderByName: boolean = true; // Variable de estado para el orden del nombre
  ascendingOrderByDate: boolean = true; // Variable de estado para el orden de la posición en el array



  searchByName() {   // Función para realizar la búsqueda por el valor de Nom
    return this.submittedBudgets.filter(budget =>
      budget.Nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleSortOrderPrice() {  // Función para alternar el orden
    this.ascendingOrder = !this.ascendingOrder;
    this.sortByPrice(this.ascendingOrder);
  }

  sortByPrice(ascending: boolean) {   // Función para ordenar por precio
    this.submittedBudgets.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return ascending ? priceA - priceB : priceB - priceA;
    });
  }

  toggleSortOrderByName() {
    this.ascendingOrderByName = !this.ascendingOrderByName;
    this.sortByName(this.ascendingOrderByName);
  }

  sortByName(ascending: boolean) {   // Función para ordenar por nombre
    this.submittedBudgets.sort((a, b) => {
      const nameA = a.Nom.toUpperCase();
      const nameB = b.Nom.toUpperCase();
      return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
  }

  toggleSortOrderByDate() {
    this.ascendingOrderByDate = !this.ascendingOrderByDate;
    this.sortByDate(this.ascendingOrderByDate);
  }

  sortByDate(ascending: boolean) {
    this.submittedBudgets.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return ascending ? dateA - dateB : dateB - dateA;
    });
  }
}
