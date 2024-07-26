import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({ selector: '[block]' })
export class BlockDirective {

    @Input("block")
    blockedWord:string;

    constructor(private er:ElementRef) { }

    @HostListener("keyup")
    m1(){
        if(this.er.nativeElement.value.indexOf(this.blockedWord)!=-1){
            alert("please change value")
        }
    }
}