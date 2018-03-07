import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: Product;

  constructor() {
    let newProduct = new Product(
      'NiceHat',
      'A nice Black Hat',
      ''
    )
  }
}
