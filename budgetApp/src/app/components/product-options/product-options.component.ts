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
  @Input() servicesOffered: any;

  showOptions: boolean = false;

  pagesNumber: number = 0;
  languageNumber: number = 0;
  extraService: number = 30;

  toggleOptions() {
    // Toggle the visibility of options when the checkbox is clicked
    this.showOptions = !this.showOptions;
    this.servicesOffered.selected = !this.servicesOffered.selected;  // Toggle the selected state
    this.totalBudget();
  }

  constructor(private cdr: ChangeDetectorRef, private budgetService: BudgetService) { }


  //crear un bucle. si hay un objeto, y el objeto tiene opciones, crear un boton - y + para cada opcion de ese objeto.


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
    this.budgetService.calculateTotalBudget([this.servicesOffered], this.pagesNumber, this.languageNumber, this.extraService);
    //console.log(" Pages: " + this.pagesNumber + " Laguages: " + this.languageNumber + " Extra Service: " + this.extraService )
  }






  optionNumbers: { [key: string]: number } = {};


  decrementOption(option: any) {
    this.optionNumbers[option.extra] = (this.optionNumbers[option.extra] || 0) - 1;
  }
  
  incrementOption(option: any) {
    this.optionNumbers[option.extra] = (this.optionNumbers[option.extra] || 0) + 1;
  }
  getOptionNumber(option: any): number {
    return this.optionNumbers[option.extra] || 0;
  }
}
