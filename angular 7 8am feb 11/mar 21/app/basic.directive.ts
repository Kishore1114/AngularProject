import { Directive,HostListener,ElementRef,Input } from '@angular/core';

@Directive({ selector: '[basic]' })
export class BasicDirective {

    @Input("basic")
    bgColor:string;

    constructor(private er:ElementRef) {
        console.log(this.er);
     }

    @HostListener("click")
    m1(){
        this.er.nativeElement.style.backgroundColor = this.bgColor;
    }

    @HostListener("mouseout")
    m2(){
        this.er.nativeElement.style.backgroundColor = '';
    }
}