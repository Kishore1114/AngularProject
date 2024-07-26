import { Component, OnInit } from '@angular/core';
import { Product } from './../shared/models/product';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from './product.service';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent{

    products=[];

    constructor(private ps:ProductService){
        this.ps.getAllProducts().subscribe((response)=>{
            this.products = (<Product[]>response);
        })
    }
    
}