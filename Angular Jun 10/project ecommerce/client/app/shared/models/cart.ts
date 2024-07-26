import { Product } from './product';
import { User } from './user';

export class Cart{
    products:CartProduct[];
    user:User;
    total:number = 0;
    constructor(a:User){
        this.products = [];
        this.user = a;
    }
}

export class CartProduct{
    product:Product;
    quantity:number;
    amount:number;
    constructor( product:Product,quantity:number){
        this.product = product;
        this.quantity = quantity;
        this.amount = this.product.price * this.quantity;
    }
}