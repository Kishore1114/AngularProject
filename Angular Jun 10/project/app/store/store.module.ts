import { HomeComponent } from './home.component';
import { StoreRoutingModule } from './store.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule,StoreRoutingModule],
    declarations:[HomeComponent],
    exports:[HomeComponent]
})
export class StoreModule { }