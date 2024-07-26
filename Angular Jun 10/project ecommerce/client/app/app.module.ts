import { ProductsModule } from './products/products.module';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersModule } from './users/user.module';
import { AppComponent } from './app.component';

export const AppRoutes = [
	
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    StoreModule,
    ProductsModule,
    UsersModule,
    RouterModule.forRoot(AppRoutes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
