import { OrderConfirmComponent } from './order-confirm.component';
import { CheckoutComponent } from './checkout.component';
import { CartComponent } from './cart.component';
import { ProductDisplayComponent } from './../products/product-display.component';
import { StoreMainComponent } from './store-main.component';
import { ProductsModule } from './../products/product.module';
import { SharedModule } from './../shared/shared.module';
import { StoreComponent } from './store.component';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule,Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
var rules:Routes = [

    {path:"store",component:StoreComponent,children:[
        {path:"",component:StoreMainComponent},
        {path:"home",component:StoreMainComponent},
        {path:"productDisplay/:id",component:ProductDisplayComponent},
        {path:"checkout",component:CheckoutComponent},
        {path:"cart",component:CartComponent},
        {path:"orderConfirm",component:OrderConfirmComponent},
    ]},

];


@NgModule({
    imports: [CommonModule,SharedModule,ProductsModule,FormsModule,RouterModule.forRoot(rules),RouterModule],
    declarations: [StoreComponent,StoreMainComponent,CartComponent,CheckoutComponent,OrderConfirmComponent]
})
export class StoreModule { }
