import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

var routingRules = [

    {path:"home",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
    {path:"",component:HomeComponent},

];

@NgModule({
    imports: [BrowserModule,UserModule,ProductsModule,RouterModule.forRoot(routingRules),RouterModule],
    declarations: [AppComponent,HomeComponent,AboutComponent,ContactComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
