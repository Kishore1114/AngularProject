import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class UserService {

    constructor(private hc:HttpClient) { }

    login(data:User){
        return this.hc.get("http://localhost:3000/users/?username="+data.username+"&password="+data.password+"")
    }
}