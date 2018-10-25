import { Component , ViewChildren, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, Slides } from 'ionic-angular';
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
  //cosa: any = [];
@ViewChildren(Slides) slides: QueryList<Slides>;

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
        //this.cosa = this.slides.toArray();
	    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FAlmuerzoPage');
  }


   openModal_precio(i: int) {
      let cosa = this.slides.toArray(), j = cosa[i].getActiveIndex(); 

      const datos = {
       idplato : this.casino.parsed_response[i].menus[j].id_plato,
       nombremenu : this.casino.parsed_response[i].menus[j].plato,
       idcasino : this.id_casino
     };

      console.log("Hola \n");
      console.log("id_plato: " + datos.idplato);
      console.log("menu: " + datos.nombremenu);
      console.log("idcasino: " + datos.idcasino);


      const myModal = this.modal.create('PmodalPage', {data: datos  });

      myModal.present();

    };


    slideChanged() {

    };

  openModal_nutricion(plato) {

    const myModal = this.modal.create('InfomodalPage', {data: plato  });

    myModal.present();
  };
}
