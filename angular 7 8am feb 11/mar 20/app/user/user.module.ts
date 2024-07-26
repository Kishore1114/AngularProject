import { AuthGuard } from './auth.guard';
import { SessionService } from './session.service';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SelectUserComponent } from './select-user.component';
import { AddUserComponent } from './add-user.component';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Route } from "@angular/router";

var userRules = [
    {path:"addUser",component:AddUserComponent,canActivate:[AuthGuard]},
    {path:"selectUser",component:SelectUserComponent},
    {path:"login",component:LoginComponent}
];


@NgModule({
    imports: [CommonModule,FormsModule,HttpClientModule,RouterModule.forChild(userRules),RouterModule],
    declarations: [AddUserComponent,SelectUserComponent,LoginComponent],
    providers:[SessionService,AuthGuard]
})
export class UserModule { }
