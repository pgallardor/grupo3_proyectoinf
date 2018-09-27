import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  casinos: any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('http://localhost:3000/jonadb').subscribe(response => {
      console.log(response);
      this.casinos = response;
    })
  }

}
