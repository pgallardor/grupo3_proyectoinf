import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { GoogleMapComponent } from '../../components/google-map/google-map';
/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
 
    @ViewChild(GoogleMapComponent) mapComponent: GoogleMapComponent;
 
    constructor() {
 
    }
 
    testMarker(){
 
        let center = this.mapComponent.map.getCenter();
        this.mapComponent.addMarker(center.lat(), center.lng());
 
    }
 
}
