import { Student } from './student';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent{

    students:Student[] = [];

    constructor(private hc:HttpClient){

        this.hc.get("http://localhost:8080/students/getAllStudents").subscribe((data)=>{
            this.students = <Student[]>data;
        })

    }

}