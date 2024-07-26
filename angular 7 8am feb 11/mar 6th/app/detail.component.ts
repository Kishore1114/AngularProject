import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'detail',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {
   
   @Input()
    j:number;

    @Output()
    abc:EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { }
}