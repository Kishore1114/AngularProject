import { StudentInsertComponent } from './student-insert.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports:[BrowserModule,HttpClientModule,FormsModule],
    declarations:[AppComponent,StudentInsertComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}