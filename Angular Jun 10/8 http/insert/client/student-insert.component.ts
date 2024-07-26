import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-insert',
    templateUrl: 'student-insert.component.html'
})

export class StudentInsertComponent{
    s = new Student();
    constructor(private hc:HttpClient){
    }
    save(){
        this.hc.post("http://localhost:8080/students/insertStudent",this.s).subscribe((data)=>{
            alert("insertion success");
        },(error)=>{
            alert("data insertion failed")
        })
    }

}