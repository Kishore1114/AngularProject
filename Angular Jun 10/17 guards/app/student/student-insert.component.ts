import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-insert',
    template: '<h1>student insert content</h1><button (click)="goToListPage();">List</button>'
})

export class StudentInsertComponent{

    constructor(private router:Router){

    }

    goToListPage(){
        this.router.navigate(['/home']);
    }
    
}