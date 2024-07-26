import { HomeComponent } from './home.component';
import { StoreRoutingModule } from './store.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { SharedModule } from './../shared/shared.module';
import { CartComponent } from './cart.component';

@NgModule({
    imports: [CommonModule,StoreRoutingModule,SharedModule],
    declarations:[HomeComponent,CartComponent],
    exports:[HomeComponent],
    providers:[HomeService]
})
export class StoreModule { }