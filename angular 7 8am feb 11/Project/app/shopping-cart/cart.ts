import { CartProduct } from './cart-product';
import { Product } from './../products/product';
import { User } from './../users/user';
export class Cart{
    products:CartProduct[];
    user:User;
    total:number = 0;
    constructor(a:User){
        this.products = [];
        this.user = a;
    }

    

}