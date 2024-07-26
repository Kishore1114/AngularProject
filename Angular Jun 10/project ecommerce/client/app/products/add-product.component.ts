import { ProductService } from './product.service';
import { Product } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'add-product',
    templateUrl: 'add-product.component.html'
})

export class AddProductComponent{

    product:Product = new Product();

    constructor(private ps:ProductService){

    }

    addProduct(){
        this.ps.addProduct(this.product).subscribe((response)=>{
            alert("success");
        })
    }

}