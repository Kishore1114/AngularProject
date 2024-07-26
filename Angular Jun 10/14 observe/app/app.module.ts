import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Service2 } from './s2.service';
import { Service1 } from './s1.service';

import { AppComponent } from './app.component';
import { Component1 } from './c1.component';
import { Component2 } from './c2.component';
@NgModule({
  declarations: [
    AppComponent,Component1,Component2
  ],
  imports: [
BrowserModule
  ],
  providers: [Service1,Service2],
  bootstrap: [AppComponent]
})
export class AppModule { }
