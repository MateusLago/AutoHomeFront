import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginModel, LoginResponse } from './login.data';
@Injectable()
export class LoginService {
    private url = 'http://127.0.0.1:8000/api/login/';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(
        private http: HttpClient,
    ) {}

    login(loginModel: LoginModel) {
        return this.http.post(this.url, loginModel, this.httpOptions);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}
