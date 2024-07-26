import { CartService } from './../shared/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product';
import { Component,Output, OnInit,Input,EventEmitter } from '@angular/core';

@Component({
    selector: 'product-display',
    templateUrl: 'product-display.component.html',
    styleUrls:['product-display.component.css']
})

export class ProductDisplayComponent implements OnInit {

    @Input()
    p1:Product;

    constructor(private cs:CartService,private ps:ProductService,private ar:ActivatedRoute) {
        this.p1 = new Product();
        var id = this.ar.snapshot.params["id"];
        this.ps.getProductById(id).subscribe((data)=>{
            this.p1 = <Product>data;
        })
     }

    ngOnInit() { }

    addToCartFn(){
        this.cs.addToCart(this.p1);
    }
}