import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent{

    students:Student[] = [];

    load(){
        this.hc.get("http://localhost:3000/students").subscribe((response)=>{
            this.students = <Student[]> response;
        })
    }
}