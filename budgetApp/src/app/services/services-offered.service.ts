import { Injectable } from '@angular/core';
import { serviceType } from '../types/serviceType';


@Injectable({
  providedIn: 'root'
})
export class ServicesOfferedService {

  constructor() { }

  servicesOffered: serviceType[] = [
    {
      id: 0, title: 'SEO', description: "Analisis SEO d'una pagina web", price: 300, checked: false, options: [
        { optionId: 0, extra: "pagines", price: 30, quantity: 0, extraDescription: "Per cada unitat adicional, aquest servei te un cost de " },
        { optionId: 1, extra: "idiomes", price: 30, quantity: 0, extraDescription: "Per cada unitat adicional, aquest servei te un cost de " },
        { optionId: 2, extra: "paisos", price: 50, quantity: 0, extraDescription: "Per cada unitat adicional, aquest servei te un cost de " },

      ]
    },
    {
      id: 1, title: 'Ads', description: "Creacio d'una campanya de publicitat", price: 400, checked: false, options: [
        { optionId: 3, extra: "pagines", price: 30, quantity: 0, extraDescription: "Per cada unitat adicional, aquest servei te un cost de " },
        { optionId: 4, extra: "idiomes", price: 30, quantity: 0, extraDescription: "Per cada unitat adicional, aquest servei te un cost de " },
      ]
    },
    {
      id: 2, title: 'Web', description: "Programacio d'una web responsive", price: 500, checked: false, options: [
        { optionId: 5, extra: "pagines", price: 30, quantity: 0, extraDescription: "Per cada unitat adicional, aquest servei te un cost de " },
        { optionId: 6, extra: "idiomes", price: 30, quantity: 0, extraDescription: "Per cada unitat adicional, aquest servei te un cost de " },
      ]
    },
  ];

  getServicesOffered(): serviceType[] {
    return this.servicesOffered;
  }

}
