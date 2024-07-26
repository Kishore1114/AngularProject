import { Component } from "@angular/core";

@Component({
    selector:"app-root",
    templateUrl:"app.component.html"
})
export class AppComponent{

    message:string = "complex EX";

    price:number = 100;

    value1:number = 3.14159;

    value2:number = 0.3;

    currentDate = new Date();

    student = {"id":1,"name":"s1"};

    students = [
        {"id":1,"name":"s1"},
        {"id":2,"name":"s2"},
        {"id":3,"name":"s3"},
        {"id":4,"name":"s4"},
        {"id":5,"name":"s5"},
        {"id":11,"name":"s11"},
        {"id":12,"name":"s12"},
        {"id":13,"name":"s13"},
        {"id":14,"name":"s14"},
        {"id":15,"name":"s15"},
    ];

    studentString = JSON.stringify(this.student);

}