import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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
  temp:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, public loading: LoadingController) {

    let load = this.loading.create({content: 'Cargando'});
    load.present();
    this.http.get('https://casinos-backend.herokuapp.com/queries/num-tipos').subscribe(response => {
      console.log(response);
      this.temp = response;
      load.dismiss();
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscadorPage');

  }

    goToAlmuerzoPorTipo(nombreTipo, idtipo){

      const datos = {
        tipomenu : nombreTipo,
        idmenu : idtipo
      };

      this.navCtrl.push(AlmuerzoPorTipoPage,{data : datos});


      console.log("Tipo: "+datos.tipomenu+ ", id:"+ datos.idmenu);
    }


}
