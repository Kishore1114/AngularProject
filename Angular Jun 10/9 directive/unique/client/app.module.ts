import { StudentInsertComponent } from './student-insert.component';
import { UniqueDirective } from './unique.directive';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
    imports:[BrowserModule,FormsModule,HttpClientModule],
    declarations:[AppComponent,UniqueDirective,StudentInsertComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}