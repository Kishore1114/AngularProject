import { OrderService } from './order.service';
import { UniqueNoService } from './unique-no.service';
import { CartService } from './cart.service';
import { SessionService } from './session.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[CommonModule,RouterModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers:[SessionService,CartService,UniqueNoService,OrderService]
})
export class SharedModule { }
