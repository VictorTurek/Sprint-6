import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private totalBudget: number = 0;
  private totalBudgetSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.totalBudget);

  calculateTotalBudget(pages: number, languages: number, extraService: number): void {
    this.totalBudget = pages * languages * extraService;
    this.totalBudgetSubject.next(this.totalBudget); // Emite el nuevo valor a los suscriptores
  }

  getTotalBudget(): BehaviorSubject<number> {
    return this.totalBudgetSubject;
  }
}
