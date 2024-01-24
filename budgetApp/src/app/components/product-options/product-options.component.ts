import { Component, Input } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-options',
  standalone: true,
  imports: [HomeComponent, FormsModule, CommonModule],
  templateUrl: './product-options.component.html',
  styleUrl: './product-options.component.sass'
})
export class ProductOptionsComponent {
  @Input() data: any;

  showOptions: boolean = false;
  pageNumber: number = 0;
  languageNumber: number = 0;

  toggleOptions() {
    // Toggle the visibility of options when the checkbox is clicked
    this.showOptions = !this.showOptions;
  }

}
