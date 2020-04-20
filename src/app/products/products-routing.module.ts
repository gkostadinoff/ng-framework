import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './components/product-list.component';
import {ProductDetailGuard} from './service/product-detail.guard';
import {ProductDetailComponent} from './components/product-detail.component';

const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes) // we don't want providers registered here, hence RouterModule.forChild
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule {

}
