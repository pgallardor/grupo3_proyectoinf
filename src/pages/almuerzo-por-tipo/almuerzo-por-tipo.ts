import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";


/**
 * Generated class for the AlmuerzoPorTipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-almuerzo-por-tipo',
  templateUrl: 'almuerzo-por-tipo.html',
})
export class AlmuerzoPorTipoPage {
  tipo : any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public modal:ModalController ) {
    this.http.get('http://localhost:3000/queries/casinos/2').subscribe(response =>{
      this.tipo = response;
      console.log(this.tipo);
    })
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad AlmuerzoPorTipoPage');
    console.log('llegue');
  }

  openModal_precio(plato, menu) {

    const datos = {
      idplato : plato,
      nombremenu : menu
    };

    const myModal = this.modal.create('PmodalPage', {data: datos });

    myModal.present();
  };

  openModal_nutricion(plato) {



    const myModal = this.modal.create('InfomodalPage', {data: plato  });

    myModal.present();
  };

}
