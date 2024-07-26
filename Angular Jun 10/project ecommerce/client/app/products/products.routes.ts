import { ProductDetailComponent } from './product-detail.component';
import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
const routes: Routes = [
  {path:"add-product",component:AddProductComponent},
  {path:"product-detail/:pid",component:ProductDetailComponent},  
  {path:"product-list",component:ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class ProductsRoutingModule { }