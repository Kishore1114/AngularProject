import { SessionService } from './session.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
  constructor(private ss:SessionService,private router:Router){

  }
  
  canActivate(){
      var token = this.ss.getData();
      if(token)
        return true;
      else{
        this.router.navigate(['/userLogin']);
        return false;
      }
  }


}
