import { StudentIUDComponent } from './student-iud.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list.component';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports:[BrowserModule,HttpClientModule,FormsModule],
    declarations:[AppComponent,StudentListComponent,StudentIUDComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}