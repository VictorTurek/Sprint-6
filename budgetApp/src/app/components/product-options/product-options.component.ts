import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesOfferedService } from '../../services/services-offered.service';
import { serviceType } from '../../types/serviceType';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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

  currentUrl: string = "";
  showOptions: boolean = false;
  servicesAvailable: serviceType[] = [];
  optionNumbers: { [key: string]: number } = {};
  

  constructor(
    private servicesOfferedService: ServicesOfferedService,
    private route: ActivatedRoute,  // Inyecta ActivatedRoute aquí
    private location: Location
  ) { }

  ngOnInit() {    // Inicializar selectedServices con los servicios ofrecidos del servicio
    this.servicesAvailable = this.servicesOfferedService.getServicesOffered();

    let url: string = this.location.path();     // Obtén la URL actual
    this.currentUrl = url;
    this.buildBudget(url)
    
  }

  buildBudget(url: string) { //carga la pagina con los servicios seleccinados segunla url
    //falta implementar esta function.
    console.log(url)

 
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
    this.servicesOffered.checked = !this.servicesOffered.checked;  // Actualizamos el estado 'checked' en selectedServices si el servicio está presente
    this.calcularPresupuesto();
    this.urlGenerator()
  }

  showPopup(option: any): void {
    alert(`Quantitat de ${option.extra}\n${option.extraDescription} ${option.price} euros`);     // Lógica para mostrar el mensaje en el popup.

  }

  incrementOption(option: any) {
    option.quantity += 1;
    this.optionNumbers[option.optionId] = option.quantity;
    this.calcularPresupuesto()
    this.urlGenerator()
  }

  decrementOption(option: any) {
    if (option.quantity > 0) {
      option.quantity -= 1;
    } else {
      option.quantity = 0;
    }
    this.optionNumbers[option.optionId] = option.quantity;
    this.calcularPresupuesto()
    this.urlGenerator()
  }

  calcularPresupuesto() {
    let presupuestoTotal = 0;

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

  urlGenerator() {
    let url: string = ""
    let isFirstService = true; // Variable para rastrear si es el primer servicio seleccionado

    for (let service of this.servicesAvailable) { //iteramos sobre los servicios
      if (service.checked) { //si el servicio esta seleccionado
        if (isFirstService) { //si hay mas de un servicio, se anade un "&"
          url += "/home?"
        } else {
          url += "&"
        }
        url += service.title + "=true"
        for (let option of service.options) { //iteramos sobre las opciones
          if (option.quantity > 0) { //si la cantidad es superior a 0
            url += "&" + option.extra + "=" + option.quantity
          }
        }
        isFirstService = false;

      }
    }
    this.urlUpdate(url)    //aqui llamo a una funcion que convierte la url del navegador

  }

  urlUpdate(url: string) { //esta funcion recibe la cadena de texto que hay que concatenar a la url de la home.

    let currentPath = this.location.path();   // Obtiene la ruta actual

    let updatedUrl = currentPath.split('/home')[0] + url;   // Combina la ruta actual con la nueva cadena de consulta

    this.location.go(updatedUrl);     // Actualiza la URL en el navegador sin recargar la página
  }


}
