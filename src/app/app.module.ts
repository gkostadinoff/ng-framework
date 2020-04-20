import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {WelcomeComponent} from './components/home/welcome.component';
import {ProductsModule} from './products/products.module';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    // Those 2 need to be here as they defined providers and if we exported them from CoreModule,
    // we'd get multiple instances of HttpClient service provider for example.
    BrowserModule,
    HttpClientModule,
    CoreModule, // aggregates and exposes as a single module the angular modules used across the app
    SharedModule, // contains custom reusable components, pipes and directives
    ProductsModule, // feature module (includes the feature's own routing),
    AppRoutingModule // root (top) level routes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
