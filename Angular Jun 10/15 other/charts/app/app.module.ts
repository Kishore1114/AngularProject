import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { GoogleChartsModule } from "angular-google-charts";
@NgModule({
    imports:[BrowserModule,GoogleChartsModule.forRoot()],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}