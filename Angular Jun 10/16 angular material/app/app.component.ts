import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  myControl = new FormControl();
  options: string[] = ['India', 'USA', 'UK'];
}