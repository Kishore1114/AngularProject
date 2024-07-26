import { SessionService } from './shared/session.service';
import { Component } from '@angular/core';
import { CartService } from './shared/cart.service';
import { Cart } from './shared/models/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  cart:Cart;

  constructor(private cs:CartService,private router:Router,private ss:SessionService){
    this.cart = this.cs.getCartData();
    this.cs.getCart().subscribe((data)=>{
        this.cart = data;
    })
  }
  displayCart(){
    this.router.navigate(['/cart']);
  }
  isLoggedIn(){
    console.log(this.ss.isLoggedIn());
    return this.ss.isLoggedIn();
  }
  getUserName(){
    var user = this.ss.getCurrentUser();
    console.log(user);
    return user["userData"]["userName"];
  }
}
