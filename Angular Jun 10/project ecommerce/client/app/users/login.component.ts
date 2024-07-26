import { Component, OnInit } from '@angular/core';
import { User } from './../shared/models/user';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { SessionService } from './../shared/session.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css']
})

export class LoginComponent implements OnInit {
    u1:User;

    constructor(private us:UserService,private router:Router,private ss:SessionService) { 
        this.u1 = new User();
    }

    ngOnInit() { }

    login(){
        this.us.login(this.u1).subscribe((data)=>{
            if(data["token"]){
                alert("valid user");
                this.ss.setCurrentUser(data);
                this.router.navigate(['/home']);
            }
            else
                alert("invalid user");
        })
    }
}