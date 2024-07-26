import { CartProduct } from './../shopping-cart/cart-product';
import { Cart } from './../shopping-cart/cart';
import { Product } from './../products/product';
import { SessionService } from './../shared/session.service';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
@Injectable()
export class CartService {

    cart:Cart;
    publish:Subject<Cart>;

    constructor(private ss:SessionService) {
        this.publish = new Subject<Cart>();
        var sCart = localStorage.getItem("cartdata");
        if(sCart)
            this.cart = JSON.parse(sCart);
        else{
            this.cart = new Cart(this.ss.getCurrentUser());
            localStorage.setItem("cartdata",JSON.stringify(this.cart));
        }
    }

    getCart(){
        return this.publish.asObservable();
    }

    getCartData(){
        var sCart = localStorage.getItem("cartdata");
        if(sCart)
            this.cart = JSON.parse(sCart);
        return this.cart;
    }

    addToCart(p1:Product){
        debugger;
        this.addProduct(p1,1);        
        localStorage.setItem("cartdata",JSON.stringify(this.cart));
        this.publish.next(this.cart);
    }
    removeFromCart(p1:CartProduct){
        debugger;
        this.removeProduct(p1);        
        localStorage.setItem("cartdata",JSON.stringify(this.cart));
        this.publish.next(this.cart);
    }

    changeQuantity(cartProduct:CartProduct,quantity){
        this.changeCartQuantity(cartProduct,quantity);
        localStorage.setItem("cartdata",JSON.stringify(this.cart));
        this.publish.next(this.cart);
    }

    addProduct(product:Product,quantity:number){
        var cp:CartProduct= new CartProduct(product,quantity);

        this.cart.products.push(cp);
        this.cart.total = this.cart.total + cp.amount;
    }

    removeProduct(rProduct:CartProduct){
        var index=this.cart.products.findIndex((element)=>{
            return (element.product.id == rProduct.product.id);
        });
        this.cart.products.splice(index,1);
        
        this.cart.total = this.cart.total - rProduct.amount;
    }

    changeCartQuantity(cartProduct:CartProduct,quantity){
        cartProduct.quantity = quantity;
        cartProduct.amount = cartProduct.product.price * quantity;
        this.caltotal();
    }

    caltotal(){
        this.cart.total = 0;
        for(var i=0;i<this.cart.products.length;i++){
            this.cart.total = this.cart.total + this.cart.products[i].amount;
        }
    }
}