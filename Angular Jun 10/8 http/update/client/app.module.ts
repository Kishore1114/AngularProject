import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentUpdateComponent } from './student-update.component';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
@NgModule({
    imports:[BrowserModule,FormsModule,HttpClientModule],
    declarations:[AppComponent,StudentUpdateComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}