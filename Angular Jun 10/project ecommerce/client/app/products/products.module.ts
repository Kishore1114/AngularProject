import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsRoutingModule } from './products.routes';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ProductListComponent } from './product-list.component';
import { SharedModule } from './../shared/shared.module';
@NgModule({
    imports: [CommonModule,HttpClientModule,FormsModule,SharedModule,ProductsRoutingModule,RouterModule],
    declarations:[AddProductComponent,ProductDetailComponent,ProductListComponent],
    providers:[ProductService]
})
export class ProductsModule { }