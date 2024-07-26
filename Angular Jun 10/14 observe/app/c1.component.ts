import { Component, OnInit } from '@angular/core';
import { Service1 } from './s1.service';
import { Service2 } from './s2.service';

@Component({
    selector: 'c1',
    templateUrl: 'c1.component.html'
})

export class Component1{
    i:number    = 10;
    constructor(private s1:Service1,private s2:Service2) { }

    changeIValue() { 
        this.i = this.i + 10;
        this.s1.setData(this.i);
        this.s2.setData(this.i);
    }
}