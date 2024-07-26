import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    constructor(private hc:HttpClient) { }

    getProducts(){
        return this.hc.get("http://localhost:3000/products");
    }
    getProductById(id:number){
        return this.hc.get("http://localhost:3000/products/"+id);
    }
}