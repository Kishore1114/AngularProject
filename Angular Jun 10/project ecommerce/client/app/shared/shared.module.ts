import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { SessionService } from './session.service';

@NgModule({
    imports: [CommonModule],
    providers:[CartService,SessionService]
})

export class SharedModule { }
