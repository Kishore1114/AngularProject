import { SecurityInterceptor } from './security.interceptor';
import { SecurityGuard } from './security.guard';
import { SessionService } from './session.service';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './aboutus.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';

let appRules = [
    { path:"home",component:HomeComponent },
    { path:"contact",component:ContactComponent },
    { path:"about",component:AboutUsComponent },
    { path:"student",loadChildren: './student/student.module#StudentModule'},
    { path:"employee",loadChildren: './employee/employee.module#EmployeeModule'},
    { path:"",component:HomeComponent },
];

@NgModule({
    imports: [BrowserModule,UserModule,RouterModule.forRoot(appRules),RouterModule],
    declarations: [AppComponent,HomeComponent,ContactComponent,AboutUsComponent],
    providers:[SessionService,SecurityGuard,{
        provide: HTTP_INTERCEPTORS,
        useClass: SecurityInterceptor,
        multi: true
      }],
    bootstrap: [AppComponent],
})
export class AppModule { }
