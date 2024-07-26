import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl } from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent{

    studentForm:FormGroup;

    constructor(){
        this.studentForm = new      FormGroup({
            id  :   new     FormControl(),
            name   :    new      FormControl()
        });
        
    }

    save(){
        alert(this.studentForm.value);
    }
    
}