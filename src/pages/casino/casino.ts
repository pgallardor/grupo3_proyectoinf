import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
/**
 * Generated class for the CasinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casino',
  templateUrl: 'casino.html',
})
export class CasinoPage {

   casinos: any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('http://localhost:3000/jonadb').subscribe(response => {
      console.log(response);
      this.casinos = response;
    })
  }


}
