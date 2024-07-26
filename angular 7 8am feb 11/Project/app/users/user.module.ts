import { SharedModule } from './../shared/shared.module';
import { UserDashBoardComponent } from './user-dashboard.component';
import { userRules } from './user.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { UserRegComponent } from './user-reg.component';
import { UserLoginComponent } from './user-login.component';
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
@NgModule({
    imports: [CommonModule,SharedModule,HttpClientModule,FormsModule,RouterModule.forChild(userRules)],
    declarations: [UserLoginComponent,UserRegComponent,UserDashBoardComponent],
    providers: [UserService],
})
export class UserModule { }
