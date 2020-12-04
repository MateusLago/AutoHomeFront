import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private logoutUrl = 'http://127.0.0.1:8000/api/logout/';
  title = 'angularbootstrap';
  module = 'Luzes';

  lights = ['on', 'off', 'on'];
  locks = ['on', 'off', 'on'];
  airconditioners = ['on', 'off', 'on'];

  user;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    $('#menu-toggle').click(function(e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });

    this.user = JSON.parse(window.localStorage.getItem('currentUser'));
    console.log(this.user);
  }

  logout() {
    let httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.user.token}`,
    })
    };

    return this.http.post<any>(this.logoutUrl, null, httpOptions).subscribe((response) => {
      console.log(response);
      this.showSuccess();
    })
  }

  showSuccess() {
    this.toastr.success('Logout', 'Logout realizado com sucesso!');
    this.router.navigateByUrl('/');
  }


  // tslint:disable-next-line: typedef
  changeModule(module: string) {
    this.module = module;
  }

  changeLights(status: string, index: number) {
    this.lights[index] = status;
  }

  changeLocks(status: string, index: number) {
    this.locks[index] = status;
  }

  changeAir(status: string, index: number) {
    this.airconditioners[index] = status;
  }

}
