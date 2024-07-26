import { Product } from './../shared/models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
    constructor(private httpClient: HttpClient) { }

    addProduct(productData:Product){
        return this.httpClient.post("http://localhost:8080/products/insertProduct",productData);
    }

    getAllProducts(){
        return this.httpClient.get("http://localhost:8080/products/getAllProducts");
    }
    
    getProductById(id:number){
        return this.httpClient.get("http://localhost:8080/products/getProductById/"+id);
    }
}