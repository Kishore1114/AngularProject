import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list.component';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports:[BrowserModule,HttpClientModule,AgGridModule.withComponents(null)],
    declarations:[AppComponent,StudentListComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}