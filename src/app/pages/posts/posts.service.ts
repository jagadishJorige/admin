import { Injectable } from '@angular/core';
import {
    HttpClient, HttpHeaders
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    baseUrl = 'http://18.216.174.99:3000/';
    constructor(private http: HttpClient) { }

    public saveArticle(user: any): Observable<any> {
        const token: any = localStorage.getItem('token');
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': token
            })
        }
        const url = this.baseUrl + 'articles';
        return this.http.post<any>(url, user, httpOptions).pipe(
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

    public uploadArticle(user: any): Observable<any> {
        const token: any = localStorage.getItem('token');
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': token,
                'Accept': 'application/json'
            })
        }
        const url = this.baseUrl + 'articles/upload';
        return this.http.put<any>(url, user, httpOptions).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    public getArticle(): Observable<any> {
        const token: any = localStorage.getItem('token');
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': token
            })
        }
        const url = this.baseUrl + 'articles';
        return this.http.get<any>(url, httpOptions).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }
}
