import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-insert',
    templateUrl: 'student-insert.component.html'
})

export class StudentInsertComponent{
    s = new Student();

    save(){
        //............
    }
}