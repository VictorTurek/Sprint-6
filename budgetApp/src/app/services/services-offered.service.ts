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
        { optionId: 0, extra: "Quantitat de pagines", price: 30, quantity: 0, extraDescription: "El servei te un cost de 30 euros per cada pagina adicional" },
        { optionId: 1, extra: "Quantitat de idiomes", price: 30, quantity: 0, extraDescription: "El servei te un cost de 30 euros per cada idioma adicional" },
        { optionId: 2, extra: "Quantitat de paisos", price: 30, quantity: 0, extraDescription: "El servei te un cost de 30 euros per cada pais adicional" },

      ]
    },
    {
      id: 1, title: 'Ads', description: "Creacio d'una campanya de publicitat", price: 400, checked: false, options: [
        { optionId: 3, extra: "Quantitat de pagines", price: 30, quantity: 0, extraDescription: "El servei te un cost de 30 euros per cada pagina adicional" },
        { optionId: 4, extra: "Quantitat de idiomes", price: 30, quantity: 0, extraDescription: "El servei te un cost de 30 euros per cada idioma adicional" },
      ]
    },
    {
      id: 2, title: 'Web', description: "Programacio d'una web responsive", price: 500, checked: false, options: [
        { optionId: 5, extra: "Quantitat de pagines", price: 30, quantity: 0, extraDescription: "El servei te un cost de 30 euros per cada pagina adicional" },
        { optionId: 6, extra: "Quantitat de idiomes", price: 30, quantity: 0, extraDescription: "El servei te un cost de 30 euros per cada idioma adicional" },
      ]
    },
    {
      id: 4, title: 'Test', description: "Programacio d'una web responsive", price: 1000, checked: false, options: [
      ]
    },
  ];

  getServicesOffered(): serviceType[] {
    return this.servicesOffered;
  }

}
