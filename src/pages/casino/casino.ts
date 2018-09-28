import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {DataProvider} from '../../providers/data/data';
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
export class CasinoPage{
  temp:any;
  cats:any = [
              "Junaeb",
              "Vegetariano",
              "Hipocalorico",
              "Débito"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //estas categorias deberian extraerse de la bd, en algun futuro van a aumentar;
    //this.cats= this.data.lcategorias;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CasinoPage');
  }
/*
  goToCasinos(cat):void{
    this.navCtrl.push(casinoAboutPage,cat)


  }
*/
}
