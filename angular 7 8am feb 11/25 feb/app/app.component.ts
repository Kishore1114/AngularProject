import { Student } from './student';
import { Component } from "@angular/core";

@Component({
    selector:"app-root",
    templateUrl:"app.component.html"
})
export class AppComponent{

    s:Student = new Student();

}