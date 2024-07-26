import { Injectable } from '@angular/core';
import { Cart,CartProduct } from './models/cart';
import { Subject } from "rxjs";
import { SessionService } from './session.service';
import { Product } from './models/product';
@Injectable()
export class CartService {
    
        cart:Cart = new Cart(null);
        publish:Subject<Cart>;
    
        constructor(private ss:SessionService) {
            this.publish = new Subject<Cart>();
        }
    
        getCart(){
            return this.publish.asObservable();
        }
    
        getCartData(){
            return this.cart;
        }
    
        addToCart(p1:Product){
            this.addProduct(p1,1);
            this.publish.next(this.cart);
        }
        removeFromCart(p1:CartProduct){
            this.removeProduct(p1);
            this.publish.next(this.cart);
        }
    
        changeQuantity(cartProduct:CartProduct,quantity){
            this.changeCartQuantity(cartProduct,quantity);
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