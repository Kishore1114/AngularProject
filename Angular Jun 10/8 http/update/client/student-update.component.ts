import { Student } from './student';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
    selector: 'student-update',
    templateUrl: 'student-update.component.html'
})

export class StudentUpdateComponent{

    s = new Student();

    constructor(private hc:HttpClient){

    }

    update(){
        this.hc.put("http://localhost:8080/students/updateStudent",this.s).subscribe((data)=>{
            alert("update success");
        },(error)=>{
            alert("update failure");
        });
    }
}