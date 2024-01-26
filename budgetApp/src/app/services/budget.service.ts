import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { serviceType } from '../types/serviceType';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private totalBudget: number = 0;
  private totalBudgetSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.totalBudget);

  // calculateTotalBudget(serviceType:number, pages: number, languages: number, extraService: number): void {
  //   console.log("service Price: " + serviceType + " pages Number: " + pages + " Languages Number: " + languages)

  //   this.totalBudget = serviceType + pages * languages * extraService;
  //   this.totalBudgetSubject.next(this.totalBudget); // Emite el nuevo valor a los suscriptores
  //   console.log("Total Budget: " + this.totalBudget)
  // }  

  calculateTotalBudget(services: serviceType[], pagesNumber: number, languageNumber: number, extraService: number): number {
    let total = extraService;

    // for (const service of services) {
    //   if (service.selected) {
    //     total += service.price;
    //   }
    // }

    total += this.calculateAdditionalCost(pagesNumber, languageNumber);

    // Actualiza el total en algún lugar accesible para tu aplicación, por ejemplo, en una propiedad en el servicio
    this.totalBudget = total;

    console.log(total)

    return total;
  }

  calculateAdditionalCost(pagesNumber: number, languageNumber: number): number {
    // Precio adicional basado en el patrón: páginas * idiomas * 30
    return pagesNumber * languageNumber * 30;
  }

  getTotalBudget(): BehaviorSubject<number> {
    return this.totalBudgetSubject;
  }
}
