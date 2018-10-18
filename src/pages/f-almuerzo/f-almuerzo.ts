import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "ionic-angular";

/**
 * Generated class for the FAlmuerzoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-f-almuerzo',
  templateUrl: 'f-almuerzo.html',
})
export class FAlmuerzoPage {
	casino: any = {};
	id_casino: any = 0;
  constructor(public navCtrl: NavController, public http: HttpClient,private modal: ModalController,
              public navParams: NavParams, public load: LoadingController) {
    let loading = this.load.create({content: 'Espere un momento'});
    loading.present();
    this.id_casino =this.navParams.get('data');
	  console.log(this.id_casino);
  	this.http.get('https://casinos-backend.herokuapp.com/queries/opciones/' + this.id_casino).subscribe(response => {
	      console.log(response);
	      this.casino = response;
	      loading.dismiss();
	    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FAlmuerzoPage');
  }


   openModal_precio(plato, menu, casino) {

     const datos = {
       idplato : plato,
       nombremenu : menu,
       idcasino : casino
     };

      const myModal = this.modal.create('PmodalPage', {data: datos  });

      myModal.present();
    };

  openModal_nutricion(plato) {

    const myModal = this.modal.create('InfomodalPage', {data: plato  });

    myModal.present();
  };
}
