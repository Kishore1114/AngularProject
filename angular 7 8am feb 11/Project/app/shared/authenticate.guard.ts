import { SessionService } from './session.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthenticateGuard implements CanActivate {
    constructor(private ss:SessionService) { }

    canActivate() {
        return this.ss.isLoggedIn();
    }
}