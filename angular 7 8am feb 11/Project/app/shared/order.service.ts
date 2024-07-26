import { Order } from './../shopping-cart/order';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class OrderService {
    
        constructor(private hc:HttpClient) { }
    
        checkout(data:Order){
            return this.hc.post("http://localhost:3000/orders",data)
        }

}