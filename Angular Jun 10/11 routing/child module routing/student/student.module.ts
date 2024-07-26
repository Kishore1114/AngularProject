import { RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { StudentInsertComponent } from './student-insert.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

let studentRules = [
    {path:"studentInsert",component:StudentInsertComponent},
    {path:"studentList",component:StudentListComponent},
]

@NgModule({
    imports: [CommonModule,RouterModule.forChild(studentRules)],
    declarations:[StudentInsertComponent,StudentListComponent]
})
export class StudentModule { }
