import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Product } from './../shared/models/product';
import { CartService } from './../shared/cart.service';
import { Cart } from './../shared/models/cart';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    products;

    constructor(private hs:HomeService) { }

    ngOnInit() { 
        this.hs.getHomeProducts().subscribe((response)=>{
            this.products = <Product[]>response;
        })        
    }
}