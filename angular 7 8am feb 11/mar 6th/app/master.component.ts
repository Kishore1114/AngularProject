import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'master',
    templateUrl: 'master.component.html'
})

export class MasterComponent implements OnInit {
   
    i:number = 10;

    m1(data:number){
        this.i = data;
    }
   
    constructor() { }

    ngOnInit() { }
}