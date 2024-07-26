import { SessionService } from './session.service';
import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

@Injectable()
export class SecureChildComponentGuard implements CanActivateChild {
    constructor(private ss:SessionService,private router:Router) { }

    canActivateChild() {
        var token = this.ss.getData();
        if(token)
          return true;
        else{
          this.router.navigate(['/userLogin']);
          return false;
        }
    }
}