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
  pagesNumber: number = 0;
  languageNumber: number = 0;
  extraService: number = 30;

  toggleOptions() {
    // Toggle the visibility of options when the checkbox is clicked
    this.showOptions = !this.showOptions;
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

  // totalBudget(){
  //  let totalBudget:number = this.pagesNumber * this.languageNumber * this.extraService;
  //  console.log(totalBudget);
  //  return totalBudget;
  // }

  
  totalBudget(): void {
    this.budgetService.calculateTotalBudget(this.pagesNumber, this.languageNumber, this.extraService);
    let totalBudget:number = this.pagesNumber * this.languageNumber * this.extraService; //para ver si funciona
    console.log(totalBudget)
  }


}
