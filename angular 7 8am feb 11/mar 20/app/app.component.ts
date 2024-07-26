import { SessionService } from './user/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent{

    constructor(private ss:SessionService){

    }

    getLoginDataFromService(){
        return this.ss.getLoginData();
    }
    
}