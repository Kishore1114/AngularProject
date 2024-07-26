import { Router, ActivatedRoute } from '@angular/router';
import { UniqueNoService } from './../shared/unique-no.service';
import { Order } from './order';
import { OrderService } from './../shared/order.service';
import { SessionService } from './../shared/session.service';
import { User } from './../users/user';
import { CartService } from './../shared/cart.service';
import { Cart } from './cart';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'checkout',
    templateUrl: 'checkout.component.html',
    styleUrls:['checkout.component.css']
})

export class CheckoutComponent implements OnInit {
    cart:Cart;
    user:User
    constructor(private route:ActivatedRoute,private router:Router,private cs:CartService,private ss:SessionService,private os:OrderService,private us:UniqueNoService) {
        
     }

    ngOnInit() { 
        this.cart = this.cs.getCartData();
        this.user = this.cart.user;        
        this.cs.getCart().subscribe((data)=>{
            this.cart = data;
            this.user = this.cart.user;   
        })
    }

    confirm(){
        /*var order:Order= new Order();
        order.cart = this.cart;
        order.orderDate = new Date();
        order.id = this.us.generate();

        this.os.checkout(order).subscribe(
            
           ( data )   =>  {
            
            this.router.navigate([ '../store/main' ], { relativeTo: this.route })
           });   */ 
           alert("in confirm")
           this.router.navigate([ '../orderConfirm' ], { relativeTo: this.route });
    }
}