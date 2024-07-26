import { Component, OnInit } from '@angular/core';
import { Cart,CartProduct } from './../shared/models/cart';
import { CartService } from './../shared/cart.service';

@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html',
    styleUrls:['cart.component.css']
})

export class CartComponent{
    cart:Cart;
    constructor(private cs:CartService) { 
        this.cart = this.cs.getCartData();
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