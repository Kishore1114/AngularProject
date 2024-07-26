import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[unique]' })
export class UniqueDirective {
    constructor(private er:ElementRef,private hc:HttpClient) { }

    @HostListener("blur")
    m1(){

        var idValue = this.er.nativeElement.value;

        this.hc.get("http://localhost:8080/students/getStudentById/"+idValue).subscribe((data)=>{
        
            if((<Student[]>data).length==1){
                alert("id already exists");
                this.er.nativeElement.value = "";
                this.er.nativeElement.focus();
            }

        },(error)=>{
            alert("data loading failed")
        })

    }
}