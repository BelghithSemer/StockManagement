import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './dashboard/home-page/home-page.component';
import { ProductsPageComponent } from './dashboard/product/products-page/products-page.component';
import { ProviderssPageComponent } from './dashboard/provider/providerss-page/providerss-page.component';
import { NavigationBarComponent } from './dashboard/navigation-bar/navigation-bar.component';
import { FacturePageComponent } from './dashboard/facture-page/facture-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategorysComponent } from './ProductManagement/categorys/categorys.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './ProductManagement/products/products.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    HomePageComponent,
    ProviderssPageComponent,
    NavigationBarComponent,
    FacturePageComponent,
    CategorysComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
