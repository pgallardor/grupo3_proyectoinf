import { Component } from '@angular/core';
import {IonicPage,  NavController, NavParams} from 'ionic-angular';
import {AlertController, LoadingController} from "ionic-angular";
import {isUndefined} from "ionic-angular/util/util";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  state : any = 0;
  datos : any;
  icon_class;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController,
              public http: HttpClient,public load: LoadingController) {
    this.datos = {
      comentario: '',
      correo: ''
    };
    this.icon_class = "ios-trash-outline";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  checkIcon(){
    if (this.datos.comentario === '' && this.datos.correo === '')
      this.icon_class = "ios-trash-outline";
    else this.icon_class = "ios-trash";
  }

  comentario_enviado(){
    console.log(this.datos);
    this.state = 0;
    try {
      if (this.datos.correo.search("@") > 0) {
        console.log("Correo correcto");
      }
      else {
        console.log("Correo debe ingresarse otra vez");
        this.alerta_correo();
        this.state = 1;
      }
    }
    catch{
      console.log("No se ha ingresado correo");
      this.alerta_correo();
      this.state = 1;
    }
    if(isUndefined(this.datos.comentario) || this.datos.comentario === ''){
      this.alerta_comentario()
      this.state = 1;
    }
    if(this.state === 0){
      let loading = this.load.create({content: 'Enviando comentario'});
      loading.present();
      console.log("Sin problema");
      this.http.post("https://casinos-backend.herokuapp.com/api/comment", this.datos)
        .subscribe(response => {
            loading.dismiss();
            this.success();
            this.limpiar_comentario();

        },
          error => {
            console.log(error);
          })
    }
    else{
      console.log("Algo falta");
    }


  }

  success(){
    const alert = this.alertCtrl.create(
      {
        title : "Comentario enviado exitosamente!",
        buttons : ["Listo"]
      }
    );
    alert.present();
  }

  alerta_correo(){
    const alert = this.alertCtrl.create(
      {
        title : "Error!",
        subTitle : "Se debe ingresar un correo válido",
        buttons : ["Cancelar"]
      }
    );
    alert.present();
  }

  alerta_comentario(){
    const alert = this.alertCtrl.create(
      {
        title : "Error!",
        subTitle : "Se debe ingresar comentario",
        buttons : ["Cancelar"]
      }
    );
    alert.present();
  }

  limpiar_comentario(){
    this.datos = {
      comentario: '',
      correo: ''
    };

  }

}
