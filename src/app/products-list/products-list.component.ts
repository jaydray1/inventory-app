import { 
  Component,
  EventEmitter,
  Input,
  Output 
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  // the product passed to us
  @Input() productList: Product[];
  // outputs the current prodcut whenever a new Product is selected
  @Output() onProductSelected: EventEmitter<Product>;
// local state containing the currently selected product 
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
   }
  
   // clicked sets this.currentProduct to the product that was passed in
   // and it emits the Product that was clicked on our output
   clicked(product: Product): void {
     this.currentProduct = product;
     this.onProductSelected.emit(product);
   }
   isSelected(product: Product): boolean {
     if(!product || !this.currentProduct) {
       return false;
     }
     return product.sku === this.currentProduct.sku;
   }


}
