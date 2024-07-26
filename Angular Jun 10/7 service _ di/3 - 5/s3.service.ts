import { Service5 } from './s5.service';
import { Service4 } from './s4.service';
import { Injectable } from "@angular/core";

@Injectable()
export class Service3{

    constructor(private s4:Service4,private s5:Service5){
        console.log("i am in service3");
    }

}