import { ProductDetailComponent } from './product-detail.component';
import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"add-product",component:AddProductComponent},
  {path:"product-detail",component:ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }