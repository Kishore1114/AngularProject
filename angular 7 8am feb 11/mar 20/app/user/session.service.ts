import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

    loginData:boolean = false;

    constructor() { }

    getLoginData(){
        return this.loginData;
    }

    setLoginData(newData:boolean){
        this.loginData = newData;
    }
}