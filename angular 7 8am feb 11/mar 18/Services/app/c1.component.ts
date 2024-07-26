import { Service2 } from './s2.service';
import { Service1 } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c1',
    template: '<h1>C1 component</h1>'
})

export class Component1 implements OnInit {
    constructor(private s1:Service1,private s2:Service2) {
        console.log("i am in Component1");
     }

    ngOnInit() { }
}