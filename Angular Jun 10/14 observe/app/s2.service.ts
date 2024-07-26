import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
@Injectable()
export class Service2 {

    data:Subject<number> = new Subject<number>();

    getObservable(){
        return this.data.asObservable();
    }   

    setData(newValue:number){
        this.data.next(newValue);
    }
}