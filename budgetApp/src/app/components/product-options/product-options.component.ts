import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesOfferedService } from '../../services/services-offered.service';
import { serviceType} from '../../types/serviceType';


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

  constructor(private servicesOfferedService: ServicesOfferedService) { }


  ngOnInit() {    // Inicializar selectedServices con los servicios ofrecidos del servicio
    this.servicesAvailable = this.servicesOfferedService.getServicesOffered();
  }

  toggleOptions() {
    this.servicesOffered.checked = !this.servicesOffered.checked;  // Actualizamos el estado 'checked' en selectedServices si el servicio está presente
    let index = this.servicesAvailable.findIndex(service => service.id === this.servicesOffered.id);
    this.calcularPresupuesto();
  }

  showPopup(option: any): void {
    // Lógica para mostrar el mensaje en el popup.
    alert(`${option.extra}\n${option.extraDescription} ${option.price} euros`);
 }

  incrementOption(option: any) {
    option.quantity += 1;
    this.optionNumbers[option.optionId] = option.quantity;
    this.calcularPresupuesto()
  }

  decrementOption(option: any) {
    if (option.quantity > 0) {
      option.quantity -= 1;
    } else {
      option.quantity = 0;
    }
    this.optionNumbers[option.optionId] = option.quantity;
    this.calcularPresupuesto()
  }

  calcularPresupuesto() {
    let presupuestoTotal = 0;
    //console.log("servicesAvailable", this.servicesAvailable)

    for (let servicio of this.servicesAvailable) {
      if (servicio.checked) {
        presupuestoTotal += servicio.price;    // Suma el precio base del servicio
        for (let option of servicio.options) {  //aqui anadir la logica para sumar las opciones adcionales si estas son mayores a 0.
          if (option.quantity > 0) {
            presupuestoTotal += option.quantity * option.price
          }
        }
      }
    }
    this.budgetUpdated.emit(presupuestoTotal); //emite el presupuesto total
  }
}
