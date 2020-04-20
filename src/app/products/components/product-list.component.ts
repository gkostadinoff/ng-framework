import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import {map} from 'rxjs/operators';
import {IProduct} from '../model/product.model';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  pageTitle = 'Products';
  errorMessage = '';
  imageWidth = 50;
  displayImage = false;
  imageMargin = 2;
  toggleImageButtonText = 'Show Image';
  filterBy = '';

  products: IProduct[] = [];

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    console.log('on ProductListComponent init...');
    this._productService.getProducts()
      .subscribe(
        products => this.products = products,
        error => this.errorMessage = error.message
      );
  }

  ngOnChanges(changes: SimpleChanges): void {
    // not called as no input elements present
    console.log('on ProductListComponent changes...');
  }

  ngOnDestroy(): void {
    console.log('on ProductListComponent destroy...');
  }

  toggleImageDisplay() {
    this.displayImage = !this.displayImage;
    if (this.displayImage) {
      this.toggleImageButtonText = 'Hide Image';
    } else {
      this.toggleImageButtonText = 'Show Image';
    }
  }

  filterProducts() {
     this._productService.getProducts()
      .pipe(
        map(products =>
          products.filter(p => p.productName.toLowerCase().includes(this.filterBy.toLowerCase()))
        )
      ).subscribe(
        products => this.products = products,
       error => this.errorMessage = error.message
       );
  }

  changeProductRating(event: number, productId: number) {
    // If I do the following, the inner component gets destroyed and recreated for each of the products,
    // we need only the rating changed instead

    // this.products = [];
    // this.products$.pipe(
    //   map(p => p.productId !== productId ? p : { ...p, starRating: event })
    // )
    // .subscribe(product => { this.products = [...this.products, product] })

    const product = this.products.filter(p => p.productId === productId);
    product[0].starRating = event;
  }
}
