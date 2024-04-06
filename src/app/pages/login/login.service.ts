import { Injectable } from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    baseUrl = 'http://18.216.174.99:3000/';
    constructor(private http: HttpClient) { }

    login(user: any): Observable<any> {
        const url = this.baseUrl + 'users/auth/login';
        return this.http.post<any>(url, user).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }


    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }

}
