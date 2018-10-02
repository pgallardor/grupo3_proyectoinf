import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";



/**
 * Generated class for the PmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pmodal',
  templateUrl: 'pmodal.html',
})
export class PmodalPage {
  detalle: any;
  nombreplato: any = 0;
  datos : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private view: ViewController) {
    const datos = this.navParams.get('data');
    const id_plato_visto = datos.idplato;
    const menu = datos.nombremenu;
    console.log('esta si');
    console.log(id_plato_visto);
    console.log(menu);
    console.log(this.datos)
    this.http.get('http://localhost:3000/queries/detalle/4/'+id_plato_visto+'/'+menu).subscribe(response => {
      console.log(response);
      this.detalle= response;
      this.nombreplato = response[0].nombre_plato;
      console.log(this.nombreplato);

    })
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad PmodalPage');
	  const data = this.navParams.get('data');
		console.log(data);
    console.log(data.idplato);
    console.log(data.nombremenu);
		console.log("hola");

  }

  closeModal_precio(){
    this.view.dismiss();
  }
}
