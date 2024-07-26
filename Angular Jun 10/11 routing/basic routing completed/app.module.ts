import { AboutUsComponent } from './aboutus.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
var appRules = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutUsComponent},
    {path:"contact",component:ContactComponent},
    {path:"",component:HomeComponent}    
];

@NgModule({
    imports: [BrowserModule,RouterModule.forRoot(appRules),RouterModule],
    declarations: [AppComponent,HomeComponent,ContactComponent,AboutUsComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
