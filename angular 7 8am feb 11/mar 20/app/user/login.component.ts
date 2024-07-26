import { Router } from '@angular/router';
import { SessionService } from './session.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private ss:SessionService,private router:Router) { }

    ngOnInit() { }

    login(){
        this.ss.setLoginData(true);
        this.router.navigate(['/home']);
    }
}