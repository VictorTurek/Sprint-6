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

  getTotalBudget(): BehaviorSubject<number> {
    return this.totalBudgetSubject;
  }
}
