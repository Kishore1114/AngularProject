import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({ selector: '[basic]' })
export class BasicDirective {
    @Input("basic")
    textColor:string;
    constructor(private er:ElementRef) {
        console.log(this.er);
     }
     @HostListener("click")
     m1(){
        this.er.nativeElement.style.color = this.textColor;
     }
}