import { SessionService } from '../shared/session.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-login',
    templateUrl: 'user-login.component.html',
    styleUrls:['user-login.component.css']
})

export class UserLoginComponent implements OnInit {

    u1:User;

    constructor(private us:UserService,private router:Router,private ss:SessionService) { 
        this.u1 = new User();
    }

    ngOnInit() { }

    login(){
        this.us.login(this.u1).subscribe((data)=>{
            if((<User[]>data).length==1){
                alert("valid user");
                this.ss.setCurrentUser(data[0]);
                this.router.navigate(['/home']);
            }
            else
                alert("invalid user");
        })
    }
}