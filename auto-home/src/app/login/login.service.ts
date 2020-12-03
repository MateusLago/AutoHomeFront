import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login.data';
export class LoginService {
    private url = 'http://127.0.0.1:8000/api/login/';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(
        private http: HttpClient,
    ) {}

    login(loginModel: LoginModel) {
        return this.http.put(this.url, loginModel, this.httpOptions);
    }
}