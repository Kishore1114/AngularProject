import { ProductDetailComponent } from './product-detail.component';
import { ProductsRoutingModule } from './products.routes';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [CommonModule,ProductsRoutingModule,RouterModule],
    declarations:[AddProductComponent,ProductDetailComponent]
})
export class ProductsModule { }