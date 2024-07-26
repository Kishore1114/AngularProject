import { SelectUserComponent } from './select-user.component';
import { AddUserComponent } from './add-user.component';
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";


@NgModule({
    imports: [CommonModule],
    declarations: [AddUserComponent,SelectUserComponent],
})
export class UserModule { }
