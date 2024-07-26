import { StoreModule } from './shopping-cart/store.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/header.component';
import { ProductsModule } from './products/product.module';
import { UserModule } from './users/user.module';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule,Routes } from "@angular/router";

var rules:Routes = [

    {path:"",redirectTo:"/store",pathMatch:'full'},

];


@NgModule({
    imports: [BrowserModule,SharedModule,ProductsModule,UserModule,StoreModule,RouterModule.forRoot(rules),RouterModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
