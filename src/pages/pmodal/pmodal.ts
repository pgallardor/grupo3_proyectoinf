import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
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
  agregados: any;
  nombreplato: any = 0;
  ensaladas: any;
  postres: any;
  sopas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
              private view: ViewController, public load: LoadingController) {
    let loading = this.load.create({content: 'Cargando precios y agregados'});
    loading.present();
    const datos = this.navParams.get('data');
    const id_plato_visto = datos.idplato;
    const menu = datos.nombremenu;
    const casino = datos.idcasino;

    /*console.log('esta si');
    console.log(id_plato_visto);
    console.log(menu);
    console.log(casino);
    console.log('todo');
    console.log(datos);*/
    this.http.get('https://casinos-backend.herokuapp.com/queries/detalle/'+casino+'/'+menu+'/'+id_plato_visto).subscribe(response => {
      /*console.log(response);*/
      this.detalle= response;
      this.nombreplato = response[0].nombre_plato;
      /*console.log(this.nombreplato);*/

    });
    this.http.get('https://casinos-backend.herokuapp.com/queries/plato-agregado/'+id_plato_visto).subscribe(response2 => {
      /*console.log(response2);*/
      this.agregados = response2;
      if (this.agregados .ensaladas.length>0){
        this.ensaladas = this.agregados.ensaladas;
      }
      else{
        this.ensaladas = [];
      }
      if (this.agregados.sopas.length>0){
        this.sopas = this.agregados.sopas;
      }
      else{
        this.sopas = [];
      }
      if (this.agregados.postres.length>0){
        this.postres = this.agregados.postres;
      }
      else{
        this.postres = [];
      }
      loading.dismiss();

      /*console.log(this.sopas);
      console.log(this.ensaladas);
      console.log(this.postres);*/
    })

  }

  ionViewWillLoad() {
    /*console.log('ionViewDidLoad PmodalPage');
    const data = this.navParams.get('data');
    /*console.log(data);
    console.log(data.idplato);
    console.log(data.nombremenu);
    console.log("hola");*/

  }

  closeModal_precio(){
    this.view.dismiss();
  }
}
