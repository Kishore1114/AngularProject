import { Cart } from './../shopping-cart/cart';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import { Component } from '@angular/core';
@Component({
    selector: 'appheader',
    templateUrl: 'header.component.html'
})
export class HeaderComponent{

    currentUserName:string = "";
    cart:Cart;

    constructor(private cs:CartService,private ss:SessionService,private router:Router){
        this.cart = this.cs.getCartData();
        this.cs.getCart().subscribe((data)=>{
            this.cart = data;
        })
    }

    getLoginInformation(){
        var result=this.ss.isLoggedIn();
        return result;
    }

    getCurrentUserName(){
        var currentUser = this.ss.getCurrentUser();
        if(currentUser!=null){
            this.currentUserName = currentUser.username;
        }
        console.log("getCurrentUserName");
        return this.currentUserName;
    }

    displayCart(){
        this.router.navigate(['/store/cart']);
    }

    m1(){
        this.ss.logout();
        this.router.navigate(['/login']);
    }

    m2(){
        this.router.navigate(['/userDashBoard']);
    }

}