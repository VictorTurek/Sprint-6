import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { ServicesOfferedService } from '../../services/services-offered.service';
import { serviceType } from '../../types/serviceType';


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

  servicesAvailable: serviceType[] = [];

  optionNumbers: { [key: string]: number } = {};

  constructor(private cdr: ChangeDetectorRef, private budgetService: BudgetService, private servicesOfferedService: ServicesOfferedService) { }


  ngOnInit() {    // Inicializar selectedServices con los servicios ofrecidos del servicio
    this.servicesAvailable = this.servicesOfferedService.getServicesOffered();
  }

  toggleOptions() {
    this.servicesOffered.checked = !this.servicesOffered.checked;  // Actualizamos el estado 'checked' en selectedServices si el servicio está presente
    let index = this.servicesAvailable.findIndex(service => service.id === this.servicesOffered.id);
    //console.log("servicesAvailable", this.servicesAvailable)
    // console.log("servicesOffered.options.quantity", this.servicesOffered.options.quantity)

    this.calcularPresupuesto();
  }


  incrementOption(option: any) {
    option.quantity += 1;
    // console.log("option + 1", option);
    // console.log("servicesAvailable", this.servicesAvailable)

    this.optionNumbers[option.optionId] = (this.optionNumbers[option.optionId] || 0) + 1;

    this.calcularPresupuesto()
  }



  decrementOption(option: any) {
    if (option.quantity > 0) {
      option.quantity -= 1;
    } else {
      option.quantity = 0;
    }

    this.optionNumbers[option.optionId] = (this.optionNumbers[option.optionId] || 0) - 1;
    this.calcularPresupuesto()
    //console.log("servicesAvailable", this.servicesAvailable)

  }



  // getOptionNumber(option: any): number {
  //   return this.optionNumbers[option.extra] || 0;
  // }


  calcularPresupuesto() {
    let presupuestoTotal = 0;
    console.log("servicesAvailable", this.servicesAvailable)
    //console.log("options lenght", this.servicesAvailable[0].options.length)


    for (let servicio of this.servicesAvailable) {
      if (servicio.checked) {
        presupuestoTotal += servicio.price;    // Suma el precio base del servicio
        //aqui anadir la logica para sumar las opciones adcionales si estas son mayores a 0.
        console.log("servicio: ", servicio);
        console.log("servicio.options.length): ", servicio.options?.length);
        console.log("servicio options: ", servicio.options);

        for (let serviceOption of servicio.options ) {
          if (serviceOption.quantity > 0) {

          }
        }

        // for (let j = 0; j < this.servicesAvailable[i].options.length; j++) { //recorremos el array de opciones adicionales.
        //   if (this.servicesAvailable[i].options[j].quantity > 0) { //si la cantidad de opciones extra seleccionada es > 0:
        //     presupuestoTotal += this.servicesAvailable[i].options[j].quantity * this.servicesAvailable[i].options[j].price;
        //   }
        // }
      }
    }


    console.log('Presupuesto total:', presupuestoTotal); // Imprime el presupuesto total

    this.budgetUpdated.emit(presupuestoTotal); //emite el presupuesto total
  }
}
