
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './../shared/models/user';
@Injectable()
export class UserService {

    constructor(private hc:HttpClient) { }

    login(loginData:User){
        return this.hc.post("http://localhost:8080/users/login",loginData);
    }

    registerUser(registerData:User){
        return this.hc.post("http://localhost:8080/users/registerUser",registerData);
    }
}