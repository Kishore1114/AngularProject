import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from './../session.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    template: '<h1>student list content</h1>'
})

export class StudentListComponent{

    constructor(private ss:SessionService,private router:Router,private hc:HttpClient){
        var token = this.ss.getData();

        let httpHeaders = new HttpHeaders({
            'x-access-token' : token
        });    
        
      let options = {  "headers" : httpHeaders     }; 

        this.hc.get("http://localhost:8080/students/getAllStudents",options).subscribe((response)=>{
            console.log(response);
        },(error)=>{
            console.log(error);
        })
    }

}