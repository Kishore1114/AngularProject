import { DetailComponent } from './detail.component';
import { MasterComponent } from './master.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,MasterComponent,DetailComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
