import {NgModule} from '@angular/core';
import {ProductListComponent} from './components/product-list.component';
import {ProductDetailComponent} from './components/product-detail.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    ProductsRoutingModule, // feature level routes, no service providers registered (hence forChild)
  ],
  exports: [
    // This is a feature module and we export only what's needed from outside of the module
    ProductListComponent
  ]
})
export class ProductsModule {

}
