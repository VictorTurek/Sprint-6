import { Injectable } from '@angular/core';
import { serviceType } from '../types/serviceType';


@Injectable({
  providedIn: 'root'
})
export class ServicesOfferedService {

  constructor() { }

  servicesOffered: serviceType[] = [
    {
      id: 0, title: 'SEO', description: "Analisis SEO d'una pagina web", price: 300, options: [
        { extra: "Quantitat de pagines", price: 30, extraDescription: "El servei te un cost de 30 euros per cada pagina adicional"},
        { extra: "Quantitat de idiomes", price: 30, extraDescription: "El servei te un cost de 30 euros per cada idioma adicional"},
        { extra: "Quantitat de paisos", price: 30, extraDescription: "El servei te un cost de 30 euros per cada pais adicional"},

      ]
    },
    { id: 1, title: 'Ads', description: "Creacio d'una campanya de publicitat", price: 400, options: [
      { extra: "Quantitat de pagines", price: 30, extraDescription: "El servei te un cost de 30 euros per cada pagina adicional"},
      { extra: "Quantitat de idiomes", price: 30, extraDescription: "El servei te un cost de 30 euros per cada idioma adicional"},
    ]
   },
    { id: 2, title: 'Web', description: "Programacio d'una web responsive", price: 500, options: [
      { extra: "Quantitat de pagines", price: 30, extraDescription: "El servei te un cost de 30 euros per cada pagina adicional"},
      { extra: "Quantitat de idiomes", price: 30, extraDescription: "El servei te un cost de 30 euros per cada idioma adicional"},
    ]
   },
  ];

  getObjects(): serviceType[] {
    return this.servicesOffered.map(service => ({ ...service, selected: false }));
  }

}
