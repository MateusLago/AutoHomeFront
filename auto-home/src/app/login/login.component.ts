import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel, RegisterModel } from './login.data';
import { LoginService } from './login.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  private loginUrl = 'http://127.0.0.1:8000/api/login/';
  private registerUrl = 'http://127.0.0.1:8000/api/register/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  email: string = null;
  password: string = null;
  loginModel: LoginModel;
  registerModel: RegisterModel;
  loginMode: boolean;
  registerMode: boolean;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginMode = true;
    this.registerMode = false;
    this.loginModel = new LoginModel();
    this.registerModel = new RegisterModel();
  }

  login() {
    return this.http.post<any>(this.loginUrl, this.loginModel, this.httpOptions)
      .pipe(
        catchError(error => {
          this.showFail();
          return error;
        })
      ).subscribe((user) => {
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.showSuccess(1);
      });
  }

  register() {
    return this.http.post<any>(this.registerUrl, this.registerModel, this.httpOptions)
      .pipe(
        catchError(error => {
          this.showFail();
          return error;
        })
      )
      .subscribe((user) => {
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.showSuccess(2);
      })
  }

  goToLogin() {
    this.loginMode = true;
    this.registerMode = false;
  }

  goToRegister() {
    this.loginMode = false;
    this.registerMode = true;
  }

  showSuccess(type: number) {
    if (type === 1) {
      this.toastr.success('Login', 'Login realizado com sucesso!');
    } else {
      this.toastr.success('Cadastrado', 'Usuário cadastrado com sucesso!');
    }
    this.router.navigateByUrl('/dashboard');
  }

  showFail() {
    this.toastr.error('Erro', 'Um erro ocorreu!');
  }
}
