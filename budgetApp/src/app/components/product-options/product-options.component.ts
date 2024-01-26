import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { ServicesOfferedService } from '../../services/services-offered.service';


@Component({
  selector: 'app-product-options',
  standalone: true,
  imports: [HomeComponent, FormsModule, CommonModule],
  templateUrl: './product-options.component.html',
  styleUrl: './product-options.component.sass'
})
export class ProductOptionsComponent implements OnInit {

  @Input() servicesOffered: any;
  @Output() budgetUpdated = new EventEmitter<number>();


  showOptions: boolean = false;

  selectedServices: any[] = [];

  optionNumbers: { [key: string]: number } = {};


  constructor(private cdr: ChangeDetectorRef, private budgetService: BudgetService, private servicesOfferedService: ServicesOfferedService) { }


  ngOnInit() {
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
    this.servicesOffered.checked = !this.servicesOffered.checked;

    // Crear una copia independiente de selectedServices
    const updatedServices = [...this.selectedServices];

    // Buscar el índice del servicio actual en la copia
    const index = updatedServices.findIndex(service => service.id === this.servicesOffered.id);

    // Crear una copia independiente del servicio actual
    const updatedService = { ...this.servicesOffered };

    // Si el servicio se marca y no está en la copia, lo agregamos
    if (this.servicesOffered.checked && index === -1) {
        updatedServices.push(updatedService);
    }

    // Si el servicio se desmarca, lo eliminamos de la copia
    if (!this.servicesOffered.checked && index !== -1) {
        updatedServices.splice(index, 1);
    }

    // Actualizamos selectedServices con la copia actualizada
    this.selectedServices = updatedServices;

    console.log(this.selectedServices)

    this.calcularPresupuesto();
}

  decrementOption(option: any) {
    this.optionNumbers[option.extra] = (this.optionNumbers[option.extra] || 0) - 1;
    this.calcularPresupuesto()

  }

  incrementOption(option: any) {
    this.optionNumbers[option.extra] = (this.optionNumbers[option.extra] || 0) + 1;
    this.calcularPresupuesto()

  }

  getOptionNumber(option: any): number {
    return this.optionNumbers[option.extra] || 0;
  }


  calcularPresupuesto() {
    let presupuestoTotal = 0;

    for (const service of this.selectedServices) {     // Recorre los servicios seleccionados
      presupuestoTotal += service.price;       // Suma el precio base del servicio

      for (const option of service.options) {       // Recorre las opciones del servicio
        if (option.selected) {         // Verifica si la opción está seleccionada (por ejemplo, mediante un checkbox)
          presupuestoTotal += option.price * option.quantity;           // Suma el precio de la opción multiplicado por la cantidad indicada
        }
      }
    }
    console.log('Presupuesto total:', presupuestoTotal); // Imprime el presupuesto total

    this.budgetUpdated.emit(presupuestoTotal); //emite el presupuesto total
  }
}
