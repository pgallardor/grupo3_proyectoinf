import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from "ionic-angular";
import {isUndefined} from "ionic-angular/util/util";

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController) {
    this.datos = {
      comentario: '',
      correo: ''
    };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
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
      console.log("Sin problema");
    }
    else{
      console.log("Algo falta");
    }


  }

  alerta(){
    const alert = this.alertCtrl.create(
      {
        title : "Error!",
        subTitle : "Se debe ingresar comentario y correo para continuar",
        buttons : ["Cancelar"]
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
