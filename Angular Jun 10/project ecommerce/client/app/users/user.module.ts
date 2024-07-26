import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routes';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule,FormsModule,UserRoutingModule,RouterModule],
    declarations:[LoginComponent,RegisterComponent],
    providers:[UserService]
})
export class UsersModule { }
