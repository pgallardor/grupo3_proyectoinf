import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import {FAlmuerzoPage} from "../f-almuerzo/f-almuerzo";
import {LoadingController} from "ionic-angular";

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

  constructor(public navCtrl: NavController, public http: HttpClient, public load: LoadingController) {
    let loading = this.load.create({content: 'Cargando'});
    loading.present();
    this.http.get('https://casinos-backend.herokuapp.com/queries/num-menus').subscribe(response => {
      console.log(response);
      this.casinos = response;
      loading.dismiss();
    })
  }

  OtraPagina(id){
    console.log(id);
    this.navCtrl.push(FAlmuerzoPage, {data: id});
  }

}
