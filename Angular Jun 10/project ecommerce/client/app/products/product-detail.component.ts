import { Component, OnInit } from '@angular/core';
import { Product } from './../shared/models/product';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from './product.service';
import { CartService } from './../shared/cart.service';

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent{

    cproduct:Product;

    constructor(private ar:ActivatedRoute,private ps:ProductService,private cs:CartService){
        var id = this.ar.snapshot.params["pid"];
        this.ps.getProductById(id).subscribe((response)=>{
            this.cproduct = (<Product[]>response)[0];
        })
    }
    addToProduct(){
        this.cs.addProduct(this.cproduct,1);
    }
    
}