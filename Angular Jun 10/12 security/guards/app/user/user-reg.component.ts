import { User } from './user';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'user-reg',
    templateUrl: 'user-reg.component.html'
})

export class UserRegComponent {
    user:User = new User();

    constructor(private hc:HttpClient){

    }

    register(){
        this.hc.post("http://localhost:8080/users/register",this.user).subscribe((response)=>{
            alert("success");
        },(error)=>{
            alert("failure");
        });
    }
}