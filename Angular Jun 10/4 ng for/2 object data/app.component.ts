import { Component } from "@angular/core";

@Component({
    selector:"app-root",
    templateUrl:"app.component.html"
})
export class AppComponent{

   students = [
       {"id":1,"name":"s1"},
       {"id":2,"name":"s2"},
       {"id":3,"name":"s3"}
   ]

   m1(){
       this.students =  [
        {"id":4,"name":"s4"},
        {"id":5,"name":"s5"},
        {"id":6,"name":"s6"}
    ]
   }

}