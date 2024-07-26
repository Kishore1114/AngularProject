import { Component, OnInit } from '@angular/core';
import { Service1 } from './s1.service';
import { Service2 } from './s2.service';

@Component({
    selector: 'c2',
    templateUrl: 'c2.component.html'
})

export class Component2{
    j:number;
    constructor(private s1:Service1,private s2:Service2) {
        this.s2.getObservable().subscribe((data)=>{
            this.j = data;
        })
     }

    getLatestData(){
        this.j = this.s1.getData();
    }
}