import { Component } from '@angular/core';
import { Product } from './product.model';
/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  products: Product[];
constructor() { this.products = [
new Product(
'MYSHOES',
'Black Running Shoes', 
'../assets/images/products/shoe-image.jpeg', 
['Men', 'Shoes', 'Running Shoes'], 109.99),
new Product( 
        'NEATOJACKET',
        'Blue Jacket',
        '../assets/images/products/jacket-image.jpeg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
new Product(
'NICEHAT',
'A Nice Black Hat', 
'../assets/images/products/hoddie-image.jpg', 
['Men', 'Accessories', 'Hats'],
29.99)]; 
}
productWasSelected(product: Product): void { 
  console.log('Product clicked: ', product);
} 
}