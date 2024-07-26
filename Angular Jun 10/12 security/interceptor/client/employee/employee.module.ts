import { SecurityGuard } from './../security.guard';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeInsertComponent } from './employee-insert.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

let employeeRules = [
    {path:"insert",component:EmployeeInsertComponent,canActivate:[SecurityGuard]},
    {path:"list",component:EmployeeListComponent,canActivate:[SecurityGuard]},
]

@NgModule({
    imports: [CommonModule,RouterModule.forChild(employeeRules)],
    declarations:[EmployeeInsertComponent,EmployeeListComponent]
})
export class EmployeeModule { }
