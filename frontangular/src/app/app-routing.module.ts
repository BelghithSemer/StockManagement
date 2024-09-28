import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './dashboard/home-page/home-page.component';
import { ProductsPageComponent } from './dashboard/product/products-page/products-page.component';
import { ProviderssPageComponent } from './dashboard/provider/providerss-page/providerss-page.component';
import { FacturePageComponent } from './dashboard/facture-page/facture-page.component';
import { NavigationBarComponent } from './dashboard/navigation-bar/navigation-bar.component';
import { CategorysComponent } from './ProductManagement/categorys/categorys.component';
import { ProductsComponent } from './ProductManagement/products/products.component';
import { ProvidersManagementComponent } from './providers-management/providers-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'providers',component:ProvidersManagementComponent},
  {path:'products-page',component:ProductsPageComponent},
  {path:'facture-page',component:FacturePageComponent},
  {path:'categorys', component:CategorysComponent},
  {path:'products',component:ProductsComponent},
  {path:'orders', component:OrderManagementComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
