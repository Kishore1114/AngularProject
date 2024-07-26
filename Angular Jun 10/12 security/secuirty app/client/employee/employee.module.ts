import { EmployeeListComponent } from './employee-list.component';
import { EmployeeInsertComponent } from './employee-insert.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

let studentRules = [
    {path:"insert",component:EmployeeInsertComponent},
    {path:"list",component:EmployeeListComponent},
]

@NgModule({
    imports: [CommonModule,RouterModule.forChild(studentRules)],
    declarations:[EmployeeInsertComponent,EmployeeListComponent]
})
export class EmployeeModule { }
