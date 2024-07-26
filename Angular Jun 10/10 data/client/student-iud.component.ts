import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-iud',
    templateUrl: 'student-iud.component.html'
})

export class StudentIUDComponent{
    s:Student = new Student();
    url:string = "http://localhost:8080/students";
    constructor(private hc:HttpClient){

    }

    insert(){
        this.hc.post(this.url+"/insertStudent",this.s).subscribe((data)=>{
            console.log("insert success");
        })
    }

    update(){
        this.hc.put(this.url+"/updateStudent/"+this.s.id,this.s).subscribe((data)=>{
            console.log("update success");
        })
    }
    delete(){
        this.hc.delete(this.url+"/deleteStudent/"+this.s.id).subscribe((data)=>{
            console.log("delete success");
        })
    }
}