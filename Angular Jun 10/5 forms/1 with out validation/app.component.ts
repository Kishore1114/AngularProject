import { Student } from './student';
import { Component } from "@angular/core";

@Component({
    selector:"app-root",
    templateUrl:"app.component.html"
})
export class AppComponent{

    s = new Student();

    save(){
        alert("id value is "+this.s);
    }

}