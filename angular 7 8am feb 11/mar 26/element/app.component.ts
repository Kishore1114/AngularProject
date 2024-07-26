
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    animations: [
        trigger('abc', [
            transition(':enter', [
              style({ opacity: 0 }),
              animate('1s', style({ opacity: 1 })),
            ]),
            transition(':leave', [
              animate('5s', style({ opacity: 0 }))
            ])
          ])
      ]

})
export class AppComponent{

    show:boolean= true;

    m1(){
        this.show = !this.show;
    }

}