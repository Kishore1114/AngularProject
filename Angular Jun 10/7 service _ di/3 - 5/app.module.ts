import { Service4 } from './s4.service';
import { Service5 } from './s5.service';
import { Service3 } from './s3.service';
import { Service2 } from './s2.service';
import { Component2 } from './c2.component';
import { Service1 } from './s1.service';
import { Component1 } from './c1.component';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,Component1,Component2],
    providers:[Service1,Service2,Service3,Service4,Service5],
    bootstrap:[AppComponent]
})
export class AppModule{

}