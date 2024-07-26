import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

const routes: Routes = [
  {"path":"home",component:HomeComponent},
  {"path":"",component:HomeComponent},
  {"path":"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),RouterModule],
  exports: [RouterModule],
})
export class StoreRoutingModule { }