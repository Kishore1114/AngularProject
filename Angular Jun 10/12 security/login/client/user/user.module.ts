import { UserLoginComponent } from './user-login.component';
import { RouterModule } from '@angular/router';
import { UserRegComponent } from './user-reg.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

var userRules = [
    {path:"userReg",component:UserRegComponent},
    {path:"userLogin",component:UserLoginComponent}
]

@NgModule({
    imports: [CommonModule,HttpClientModule,FormsModule,RouterModule.forChild(userRules)],
    declarations:[UserRegComponent,UserLoginComponent]
})
export class UserModule { }
