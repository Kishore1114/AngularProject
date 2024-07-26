import { StudentInsertComponent } from './student/student-insert.component';
import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
export class DataProtectGuard implements CanDeactivate<StudentInsertComponent> {
    canDeactivate(){
        var result = prompt("do you want to leave the page?");
        console.log(result);
        return true;
    }
}