import { Service1 } from './s1.service';
import { Component } from "@angular/core";

@Component({
    selector:"c2",
    templateUrl:"c2.component.html"
})
export class Component2{

    constructor(private s1:Service1){
        console.log("i am in Component2");
    }

}