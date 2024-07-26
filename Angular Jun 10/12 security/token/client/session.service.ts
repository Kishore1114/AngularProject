import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
    data:string;
    getData(){
        return this.data;
    }
    setData(value:string){
        this.data = value;
    }
}