import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesOfferedService } from '../../services/services-offered.service';
import { serviceType } from '../../types/serviceType';
import { ActivatedRoute, Router } from '@angular/router';



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

  constructor(
    private servicesOfferedService: ServicesOfferedService,
    private router: Router,
    private route: ActivatedRoute  // Inyecta ActivatedRoute aquí
  ) { }

  ngOnInit() {    // Inicializar selectedServices con los servicios ofrecidos del servicio
    this.servicesAvailable = this.servicesOfferedService.getServicesOffered();

    this.route.queryParams.subscribe(params => {
      // Accede a los parámetros de la ruta aquí
      const webPage = params['WebPage'];
      const campaingSeo = params['CampaingSeo'];
      const pages = params['pages'];
      const lang = params['lang'];

      // Haz algo con los parámetros (por ejemplo, actualiza tu lógica de servicios ofrecidos)
      // ...
    });
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

  urlGenerator() {
    console.log(this.servicesAvailable)
    let url: string = '/home?'
    let isFirstService = true; // Variable para rastrear si es el primer servicio seleccionado

    for (let service of this.servicesAvailable) { //iteramos sobre los servicios
      if (service.checked) { //si el servicio esta seleccionado
        if (!isFirstService) { //si hay mas de un servicio, se anade un "&"
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

  urlUpdate(url:string){
    console.log(url)
  }


}
