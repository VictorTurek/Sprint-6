import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private totalBudget: number = 0;
  private totalBudgetSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.totalBudget);

  calculateTotalBudget(serviceType:number, pages: number, languages: number, extraService: number): void {
    console.log("service Price: " + serviceType + " pages Number: " + pages + " Languages Number: " + languages)

    this.totalBudget = serviceType + pages * languages * extraService;
    this.totalBudgetSubject.next(this.totalBudget); // Emite el nuevo valor a los suscriptores
    console.log("Total Budget: " + this.totalBudget)
  }  

  getTotalBudget(): BehaviorSubject<number> {
    return this.totalBudgetSubject;
  }
}
