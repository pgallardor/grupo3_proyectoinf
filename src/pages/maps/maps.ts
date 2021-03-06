import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  casino:any ={};
  id_casino:any;
  nombre_casino: any;
  constructor(public navCtrl: NavController, public http: HttpClient,
              public navParams: NavParams) {
    
    this.id_casino =this.navParams.get('data');
	  console.log(this.id_casino);
    this.http.get('https://casinos-backend.herokuapp.com/queries/nombre-casino/'+this.id_casino).subscribe(response => {
      console.log(response);
      this.nombre_casino = response;
      this.nombre_casino = this.nombre_casino[0].nombre
      console.log(this.nombre_casino)

    })
  	
  }

}
