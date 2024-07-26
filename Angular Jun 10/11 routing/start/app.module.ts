import { AboutUsComponent } from './aboutus.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,HomeComponent,ContactComponent,AboutUsComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
