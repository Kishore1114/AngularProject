import { Injectable } from '@angular/core';

@Injectable()
export class Service1 {

    data:number;

    getData(){
        return this.data;
    }   

    setData(newValue:number){
        this.data = newValue;
    }
}