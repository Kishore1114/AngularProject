import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
    selector:"app-root",
    templateUrl:"app.component.html"
})
export class AppComponent{

    constructor(private hc:HttpClient){
        this.hc.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>{
            alert(data);
        },(error)=>{
            alert("data loading failed");
        })
    }

}