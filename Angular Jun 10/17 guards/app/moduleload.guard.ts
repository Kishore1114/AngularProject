import { SessionService } from './session.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable()
export class ModuleLoadGuard implements CanLoad {
    constructor(private ss:SessionService,private router:Router) { }

    canLoad(route: Route) {
        var token = this.ss.getData();
        if(token)
          return true;
        else{
          this.router.navigate(['/userLogin']);
          return false;
        }
    }
}