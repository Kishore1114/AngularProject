import { Injectable } from '@angular/core';

import {Subject} from "rxjs";

@Injectable()
export class Service1 {

    data:number;

    dataSharing:Subject<number> = new Subject();

    constructor() { }

    getDataSharing(){
        return this.dataSharing.asObservable();
    }

    setData(a:number){
        this.data = a;
        this.dataSharing.next(this.data);
    }
}