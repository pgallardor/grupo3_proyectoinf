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
  nombre_menu : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public modal:ModalController ) {
    const datos =this.navParams.get('data');
    this.nombre_menu = datos.tipomenu;
    console.log(this.nombre_menu);
    const id_menu = datos.idmenu;
    console.log(id_menu);
    console.log(datos);
    this.http.get('http://localhost:3000/queries/casinos/'+id_menu).subscribe(response =>{
      this.tipo = response;
      console.log(this.tipo);
    })
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad AlmuerzoPorTipoPage');
    console.log('llegue');
    const menu =this.navParams.get('data');
    console.log('Pase el menu del tipo');
    console.log(menu);
  }

  openModal_precio(plato, menu, casino) {

    const datos = {
      idplato : plato,
      nombremenu : menu,
      idcasino : casino
    };

    const myModal = this.modal.create('PmodalPage', {data: datos });

    myModal.present();
  };

  openModal_nutricion(plato) {



    const myModal = this.modal.create('InfomodalPage', {data: plato  });

    myModal.present();
  };

}
