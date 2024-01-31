import { Injectable } from '@angular/core';
import { serviceChosen } from '../types/serviceType';


@Injectable({
  providedIn: 'root'
})
export class ServicesOfferedService {

  constructor() { }

  servicesChosen: serviceChosen[] = [];

//   crear el array de budgets

  getServicesChosen(): serviceChosen[] {
    return this.servicesChosen;
  }

}