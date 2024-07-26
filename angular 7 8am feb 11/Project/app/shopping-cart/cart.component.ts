import { Router } from '@angular/router';
import { CartProduct } from './cart-product';
import { CartService } from './../shared/cart.service';
import { SessionService } from './../shared/session.service';
import { Cart } from './cart';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shotppingcart',
    templateUrl: 'cart.component.html',
    styleUrls:['cart.component.css']
})

export class CartComponent implements OnInit {
    cart:Cart;
    constructor(private ss:SessionService,private cs:CartService,private router:Router) { 
        this.cart = this.cs.getCartData();
        if(!this.cart.user){
            this.cart.user = this.ss.getCurrentUser();
            localStorage.setItem("cartdata",JSON.stringify(this.cart));
        }
    }

    ngOnInit() { }

    deleteFromCart(cartProduct:CartProduct){
        this.cs.removeFromCart(cartProduct);
    }

    changeQuantity(cartProduct:CartProduct,quantityRef){
        if(quantityRef.value<1){
            alert("atleast 1");
            quantityRef.value = 1;
        }
        this.cs.changeQuantity(cartProduct,quantityRef.value);
    }
}