import { CartService } from './../shared/cart.service';
import { ProductService } from './product.service';
import { Product } from './product';
import { Component,Output, OnInit,Input,EventEmitter } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls:['product-list.component.css']
})

export class ProductListComponent implements OnInit {

    products:Product[];

    constructor(private cs:CartService,private ps:ProductService) { 
        this.ps.getProducts().subscribe((data)=>{
            this.products = <Product[]>data;
        })

    }

    ngOnInit() { }

    addToCartFn(p1:Product){
        this.cs.addToCart(p1);
    }
}