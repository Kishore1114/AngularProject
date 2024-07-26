import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-login',
    templateUrl: 'user-login.component.html'
})

export class UserLoginComponent {

    user = new User();

    constructor(private hc:HttpClient) { }

    login(){
        this.hc.post("http://localhost:8080/users/login",this.user).subscribe((response)=>{
            alert("login success");
        },(error)=>{
            alert("invalid username and password");
        })
    }

}