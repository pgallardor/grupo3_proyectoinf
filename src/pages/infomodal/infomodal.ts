import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the InfomodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infomodal',
  templateUrl: 'infomodal.html',
})
export class InfomodalPage {
  info_nutricional : any = {};
  nombreplato: any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private view: ViewController) {
    const id_plato_visto = this.navParams.get('data');
    this.http.get('http://localhost:3000/queries/nutricion-plato/'+id_plato_visto).subscribe(response => {
      this.info_nutricional = response;
      console.log(this.info_nutricional);
      console.log("plato")
      this.nombreplato = this.info_nutricional.nombre_plato;
      console.log("info")
      console.log(this.info_nutricional.parsed_response);
    })
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad PmodalPage');
    const data = this.navParams.get('data');
    console.log(data);

  }

  closeModal_nutricion(){
    this.view.dismiss();
  }
}
