import { ContnetObjectFilterPipe } from './content-object-filter.pipe';
import { ContnetFilterPipe } from './content-filter.pipe';
import { BasicPipe } from './basic.pipe';
import { AppComponent } from './app.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent,BasicPipe,ContnetFilterPipe,ContnetObjectFilterPipe],
    bootstrap:[AppComponent]
})
export class AppModule{

}