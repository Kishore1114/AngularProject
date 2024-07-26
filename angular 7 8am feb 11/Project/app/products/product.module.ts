import { ProductDisplayComponent } from './product-display.component';
import { SharedModule } from './../shared/shared.module';
import { AuthenticateGuard } from '../shared/authenticate.guard';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list.component';
import { ProductInsertComponent } from './product-insert.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

var productRules = [

    {path:"productInsert",component:ProductInsertComponent},
    {path:"productUpdate/:id",component:ProductInsertComponent},

];

@NgModule({
    imports: [CommonModule,SharedModule,HttpClientModule,RouterModule.forChild(productRules)],
    exports:[ProductListComponent],
    declarations: [ProductInsertComponent,ProductListComponent,ProductDisplayComponent],
    providers: [ProductService],
})
export class ProductsModule { }
