import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProductService} from './product.service';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if ( 'undefined' !== typeof(route.params.id)
      && parseInt(route.params.id) > 0) { return true; }

    this._router.navigate(['/products']);
    return false;
  }


  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return this._productService.getProduct(parseInt(route.params.id)).pipe(
  //     catchError(error => of(null)),
  //     map(product => product !== null)
  //   );
  // }

}
