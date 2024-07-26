
import { Component, OnInit } from '@angular/core';
import { User } from './../shared/models/user';
import { UserService } from './user.service';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent{

    user:User = new User();

    constructor(private us:UserService){

    }

    register(){
        this.us.registerUser(this.user).subscribe((response)=>{
            alert("success");
        })
    }

}