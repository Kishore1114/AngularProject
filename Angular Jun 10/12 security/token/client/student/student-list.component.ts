import { Router } from '@angular/router';
import { SessionService } from './../session.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    template: '<h1>student list content</h1>'
})

export class StudentListComponent{

    constructor(private ss:SessionService,private router:Router){
        var token = this.ss.getData();
        if(token==undefined){
            this.router.navigate(['/userLogin']);
        }
    }

}