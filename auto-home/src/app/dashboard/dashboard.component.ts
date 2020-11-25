import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'angularbootstrap';
  module = 'Luzes';

  lights = ['on', 'off', 'on'];
  locks = ['on', 'off', 'on'];
  airconditioners = ['on', 'off', 'on'];

  constructor() { }

  ngOnInit(): void {
    $('#menu-toggle').click(function(e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
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
