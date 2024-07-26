import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
    selector: 'add-user',
    templateUrl: 'add-user.component.html'
})

export class AddUserComponent implements OnInit {
    user:User = new User();
    constructor(private hc:HttpClient,private router:Router) { }

    ngOnInit() { }

    m1(){
        this.hc.post("http://localhost:3000/users",this.user).subscribe((response)=>{
           this.router.navigate(['/selectUser']);
        })
    }
}