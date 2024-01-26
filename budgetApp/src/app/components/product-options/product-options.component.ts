import { Component, Input } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { BudgetService } from '../../services/budget.service';


@Component({
  selector: 'app-product-options',
  standalone: true,
  imports: [HomeComponent, FormsModule, CommonModule],
  templateUrl: './product-options.component.html',
  styleUrl: './product-options.component.sass'
})
export class ProductOptionsComponent {
  @Input() data: any;

  showOptions: boolean = false;

  servicePrice: number = 0;

  pagesNumber: number = 0;
  languageNumber: number = 0;
  extraService: number = 30;

  toggleOptions() {
    // Toggle the visibility of options when the checkbox is clicked
    this.showOptions = !this.showOptions;
    this.data.selected = !this.data.selected;  // Toggle the selected state
    this.totalBudget();
  }

  constructor(private cdr: ChangeDetectorRef, private budgetService: BudgetService) { }

  decrementLanguage() {
    this.languageNumber--;
    this.cdr.detectChanges(); // Actualiza la vista después de cambiar el número
    this.totalBudget()
  }

  incrementLanguage() {
    this.languageNumber++;
    this.cdr.detectChanges(); // Actualiza la vista después de cambiar el número
    this.totalBudget()
  }

  decrementPage() {
    this.pagesNumber--;
    this.cdr.detectChanges(); // Actualiza la vista después de cambiar el número
    this.totalBudget()
  }

  incrementPage() {
    this.pagesNumber++;
    this.cdr.detectChanges(); // Actualiza la vista después de cambiar el número
    this.totalBudget()
  }

  totalBudget(): void {
    //this.budgetService.calculateTotalBudget(this.pagesNumber, this.languageNumber, this.extraService);
    this.budgetService.calculateTotalBudget([this.data], this.pagesNumber, this.languageNumber, this.extraService);
    console.log("data" + this.servicePrice + "pages" + this.pagesNumber + "laguages" + this.languageNumber + "extra service" + this.extraService )
  }


}
