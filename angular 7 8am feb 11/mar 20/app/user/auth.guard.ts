import { SessionService } from './session.service';
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private ss:SessionService){
        console.log("authGuard");
    }

    canActivate(){
        console.log("in the canActivate ");
        if(this.ss.getLoginData())
            return true;
        else
            return false;
    }

}