import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SelectUserComponent } from './select-user.component';
import { AddUserComponent } from './add-user.component';
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";

var userRules = [
    {path:"addUser",component:AddUserComponent},
    {path:"selectUser",component:SelectUserComponent},
    {path:"login",component:LoginComponent}
];


@NgModule({
    imports: [CommonModule,RouterModule.forChild(userRules),RouterModule],
    declarations: [AddUserComponent,SelectUserComponent,LoginComponent],
})
export class UserModule { }
