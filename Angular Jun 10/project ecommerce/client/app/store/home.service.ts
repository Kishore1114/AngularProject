import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HomeService {
    constructor(private httpClient: HttpClient) { }

    getHomeProducts(){
        return this.httpClient.get("http://localhost:8080/products/getHotProducts");
    }
    
}