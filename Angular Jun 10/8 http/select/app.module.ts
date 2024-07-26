import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list.component';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
@NgModule({
    imports:[BrowserModule,HttpClientModule],
    declarations:[AppComponent,StudentListComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}