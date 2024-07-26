import { Component } from "@angular/core";

@Component({
    selector:"app-root",
    templateUrl:"app.component.html"
})
export class AppComponent{

    searchInput:string = "";

    searchIdInput:number;

    message:string = "AbCd";

    price:number = 1000;

    names:string[] = ["s1","s2","s3"];

    student = {"id":1,"name":"s1"};

    start:number = 0;

    end:number = 2;

    value:number = 99.6;

    currentDate:Date = new Date();

    students = [
                {"id":1,"name":"s1"},
                {"id":2,"name":"s2"},
                {"id":3,"name":"s3"},
                {"id":4,"name":"s4"},
                {"id":5,"name":"s5"},
                {"id":6,"name":"s6"},
                {"id":7,"name":"s7"},
                {"id":8,"name":"s8"},
                {"id":9,"name":"s9"},
                {"id":10,"name":"s10"}

            ];

    prev(){
        this.start = this.start - 2;
        this.end = this.end -2;
    }
    next(){
        this.start = this.start + 2;
        this.end = this.end + 2;
    }

}