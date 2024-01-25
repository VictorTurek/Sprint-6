import { Injectable } from '@angular/core';
import { serviceType } from '../types/serviceType';


@Injectable({
  providedIn: 'root'
})
export class ServicesOfferedService {

  constructor() { }

  objects: serviceType[] = [
    { id: 0, title: 'SEO', description: "Analisis SEO d'una pagina web", price: 300, options: ["Quantitat de pagines", "Quantitat de idiomes", "Quantitat de paisos"] },
    { id: 1, title: 'Ads', description: "Creacio d'una campanya de publicitat", price: 400, options: ["Quantitat de pagines", "Quantitat de idiomes"] },
    { id: 2, title: 'Web', description: "Programacio d'una web responsive", price: 500, options: ["Quantitat de pagines", "Quantitat de idiomes"] },
  ];

}
