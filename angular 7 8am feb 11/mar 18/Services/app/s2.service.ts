import { Service4 } from './s4.service';
import { Service3 } from './s3.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Service2 {

    constructor(private s3:Service3,private s4:Service4) { 
        console.log("i am in service2");
    }
}