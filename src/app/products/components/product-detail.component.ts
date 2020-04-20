import {Component, OnInit} from '@angular/core';
import {IProduct} from '../model/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {

  }

  pageTitle = 'Product Detail';
  errorMessage: string;
  product: IProduct;

  ngOnInit(): void {
    console.log(this._activatedRoute.snapshot.params.id, typeof(this._activatedRoute.snapshot.params.id));
    this._activatedRoute.params.pipe(
      switchMap(params => this._productService.getProduct(parseInt(params.id)))
    ).subscribe(
      product => this.product = product,
      error => this.errorMessage = error.message
    );
  }

  goBackToList() {
    this._router.navigate(['/products']);
  }
}
