import { StudentComponent } from './student.component';
import { RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { StudentInsertComponent } from './student-insert.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

let studentRules = [
    {path:"",component:StudentComponent,children:[
    {path:"insert",component:StudentInsertComponent},
    {path:"list",component:StudentListComponent},
    {path:"",component:StudentListComponent}]}
]

@NgModule({
    imports: [CommonModule,RouterModule.forChild(studentRules)],
    declarations:[StudentInsertComponent,StudentListComponent,StudentComponent]
})
export class StudentModule { }
