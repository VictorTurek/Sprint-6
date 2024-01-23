import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProductOptionsComponent } from '../../components/product-options/product-options.component';
import { CurrentBudgetsComponent } from '../../components/current-budgets/current-budgets.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductOptionsComponent, CurrentBudgetsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
