import { Component, OnInit, Input,OnChanges,SimpleChanges,OnDestroy } from '@angular/core';

@Component({
    selector: 'c2',
    templateUrl: 'c2.component.html'
})

export class Component2 implements OnInit,OnChanges,OnDestroy {
    
    @Input()
    j:number;
    
    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes:SimpleChanges){

        console.log(changes);

    }
    ngOnDestroy(){
        console.log("c2 is removed from the view");
    }
}