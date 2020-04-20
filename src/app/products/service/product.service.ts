import {Injectable} from '@angular/core';
import {IProduct} from '../model/product.model';
import {from, Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, filter, map, mergeMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private fakeBackendUrl = 'api/products/products.json';

  constructor(private _httpClient: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this.fakeBackendUrl)
      .pipe(
        tap(products => console.log(products)),
        catchError(err => {
          console.error('ProductService: We got error fetching products.', err);
          return throwError(err);
        })
      );
  }

  getProduct(productId: number): Observable<IProduct> {
    return this._httpClient.get<IProduct[]>(this.fakeBackendUrl)
      .pipe(
        tap(products => console.log(products)),
        catchError(err => {
          console.error(`ProductService: We got error fetching product. with id=${productId}`, err);
          return throwError(err);
        }),
        map(products => products.filter(p => p.productId === productId)),
        mergeMap((productsSingletonList => productsSingletonList.length > 0
          ? from(productsSingletonList)
          : throwError({ message: `ProductService: Product with id ${productId} was not found`})
        )
      )
    );
  }

  // getProducts(): Observable<IProduct> {
  //   return this._httpClient.get<IProduct[]>('api/products/products.json')
  //     .pipe(
  //       mergeMap(products => from(products))
  //     )
  // }
}
