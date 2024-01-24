import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProductOptionsComponent } from '../../components/product-options/product-options.component';
import { CurrentBudgetsComponent } from '../../components/current-budgets/current-budgets.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductOptionsComponent, CurrentBudgetsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  objects = [
    { title: 'SEO', description: 'Analisis SEO de una pagina web', price: '300€' },
    { title: 'Ads', description: 'Creacio duna campanya de Publi', price: '400€' },
    { title: 'Web', description: 'Programaco duna web responsive', price: '500€' },
  ];

}
