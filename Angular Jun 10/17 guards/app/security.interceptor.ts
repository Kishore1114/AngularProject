import { SessionService } from './session.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
    constructor(private ss:SessionService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        var tokenValue = this.ss.getData();
        if(tokenValue){
            const headers = req.headers
                .set('x-access-token', tokenValue);
            const authReq = req.clone({ headers });
            return next.handle(authReq);
        }
        else
            return next.handle(req);
    }
}