import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { serviceType } from '../types/serviceType';
import { ServicesOfferedService } from './services-offered.service';



@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private totalBudget: number = 0;
  private totalBudgetSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.totalBudget);

  calculateTotalBudget(servicesOffered: serviceType[], pagesNumber: number, languageNumber: number, extraService: number): number {
    let total = (pagesNumber + languageNumber) * extraService;

    let i: number = 0;

    for (let serviceOffered of servicesOffered) {
      if (serviceOffered.selected) {
        let serviceOfferedPrice = serviceOffered.price;
        total += serviceOfferedPrice;
        i++
      }

    }
    console.log(" Service Price: " + servicesOffered[0].price + " Pages: " + pagesNumber + " Laguages: " + languageNumber + " Extra Service: " + extraService + " Total: " + total)

    this.totalBudget = total;

    //console.log(total)

    return total;
  }


  getTotalBudget(): BehaviorSubject<number> {
    return this.totalBudgetSubject;
  }
}
