import { RouterModule } from '@angular/router';
import { DisplayProductComponent } from './display-product.component';
import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";


var productRules = [
    {path:"addProduct",component:AddProductComponent},
    {path:"displayProduct",component:DisplayProductComponent},
]

@NgModule({
    imports: [CommonModule,RouterModule.forChild(productRules),RouterModule],
    declarations: [AddProductComponent,DisplayProductComponent],
})
export class ProductsModule { }
