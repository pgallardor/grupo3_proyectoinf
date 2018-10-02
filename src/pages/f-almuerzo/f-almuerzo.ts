import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

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
       
  constructor(public navCtrl: NavController, public http: HttpClient,private modal: ModalController, public navParams: NavParams) {
         const myid=this.navParams.get('data');
	console.log(myid);
	this.http.get('http://localhost:3000/queries/opciones/' + myid).subscribe(response => {
	      console.log(response);
	      this.casino = response;
	    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FAlmuerzoPage');
  }


   openModal_precio(plato) {

      const myModal = this.modal.create('PmodalPage', {data: plato  });

      myModal.present();
    };

  openModal_nutricion(plato) {

    const myModal = this.modal.create('InfomodalPage', {data: plato  });

    myModal.present();
  };
}
