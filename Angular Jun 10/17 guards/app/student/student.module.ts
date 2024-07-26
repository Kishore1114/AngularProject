import { DataProtectGuard } from './../dataprotect.guard';
import { SecureChildComponentGuard } from './../securechildcomponent.guard';
import { SecurityGuard } from './../security.guard';
import { StudentComponent } from './student.component';
import { RouterModule, CanActivateChild, CanDeactivate } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { StudentInsertComponent } from './student-insert.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

let studentRules = [
    {path:"",component:StudentComponent,children:[
    {path:"insert",component:StudentInsertComponent,canDeactivate:[DataProtectGuard]},
    {path:"list",component:StudentListComponent},
    {path:"",component:StudentListComponent}],canActivateChild:[SecureChildComponentGuard]}
]

@NgModule({
    imports: [CommonModule,RouterModule.forChild(studentRules)],
    declarations:[StudentInsertComponent,StudentListComponent,StudentComponent]
})
export class StudentModule { }
