import { Service1 } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c2',
    template: '<h1>C2 component</h1>'
})

export class Component2 implements OnInit {
    constructor(private s1:Service1) {
        console.log("i am in Component2");
    }

    ngOnInit() { }
}