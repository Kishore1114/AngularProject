import { Injectable } from '@angular/core';

@Injectable()
export class Service1 {

    data:number;

    constructor() { }

    getData(){
        return this.data;
    }

    setData(a:number){
        this.data = a;
    }
}