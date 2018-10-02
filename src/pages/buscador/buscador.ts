import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {AlmuerzoPorTipoPage} from "../almuerzo-por-tipo/almuerzo-por-tipo";
//import {DataProvider} from '../../providers/data/data';
/**
 * Generated class for the CasinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscador',
  templateUrl: 'buscador.html',
})
export class BuscadorPage{
  temp:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {

    this.http.get('http://localhost:3000/queries/num-tipos').subscribe(response => {
      console.log(response);
      this.temp = response;

    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscadorPage');
  }

    goToAlmuerzoPorTipo(porTipo):void{

      this.navCtrl.push(AlmuerzoPorTipoPage,"porTipo.tipo");


      console.log("Tipo: "+porTipo.tipo);
    }
  

}
