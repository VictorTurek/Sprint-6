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

  servicesAvailable: any[] = [];
  chosenServices: any[] = [];


  optionNumbers: { [key: string]: number } = {};


  constructor(private cdr: ChangeDetectorRef, private budgetService: BudgetService, private servicesOfferedService: ServicesOfferedService) { }


  ngOnInit() {
    // Inicializar selectedServices con los servicios ofrecidos del servicio
    this.servicesAvailable = this.servicesOfferedService.getServicesOffered();
  }

  toggleOptions() {

    this.servicesOffered.checked = !this.servicesOffered.checked;
    // Actualizamos el estado 'checked' en selectedServices si el servicio está presente
    let index = this.servicesAvailable.findIndex(service => service.id === this.servicesOffered.id);
    //console.log("index of the object in the array: " + index)
    console.log("servicesAvailable", this.servicesAvailable)

    this.calcularPresupuesto();
  }



  decrementOption(option: any) {
    this.optionNumbers[option.extra] = (this.optionNumbers[option.extra] || 0) - 1;
    this.calcularPresupuesto()
    console.log("servicesAvailable", this.servicesAvailable)

  }

  incrementOption(option: any) {
    this.optionNumbers[option.extra] = (this.optionNumbers[option.extra] || 0) + 1;
    this.calcularPresupuesto()
    console.log("servicesAvailable", this.servicesAvailable)

  }

  getOptionNumber(option: any): number {
    return this.optionNumbers[option.extra] || 0;
  }


  calcularPresupuesto() {
    let presupuestoTotal = 0;
    //console.log(this.servicesAvailable)

    for (let i = 0; i < this.servicesAvailable.length; i++) {
      if (this.servicesAvailable[i].checked) {
        presupuestoTotal += this.servicesAvailable[i].price;       // Suma el precio base del servicio

      }
      
    }

    // for (let service of this.servicesAvailable) { // Recorre los servicios seleccionados
    //       if (this.servicesAvailable[1].checked) {
    //         presupuestoTotal += service.price;       // Suma el precio base del servicio

    //       }

    //   for (const option of service.options) {       // Recorre las opciones del servicio
    //     if (option.selected) {         // Verifica si la opción está seleccionada (por ejemplo, mediante un checkbox)
    //       presupuestoTotal += option.price * option.quantity;           // Suma el precio de la opción multiplicado por la cantidad indicada
    //     }
    //   }
    // }
    console.log('Presupuesto total:', presupuestoTotal); // Imprime el presupuesto total

    this.budgetUpdated.emit(presupuestoTotal); //emite el presupuesto total
  }
}
