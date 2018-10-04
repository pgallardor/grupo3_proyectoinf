import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  casinos: any;

  constructor(public navCtrl: NavController, public http: HttpClient, public load: LoadingController) {
    let loading = this.load.create({content: 'Cargando', duration: 2000});
    loading.present();
    this.http.get('https://casinos-backend.herokuapp.com/jonadb').subscribe(response => {
      console.log(response);
      this.casinos = response;
      loading.dismiss();
    })
  }

}
