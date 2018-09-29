import { Component } from '@angular/core';

import { BuscadorPage } from "../buscador/buscador";
import {CasinoPage} from "../casino/casino";
import {SettingPage} from "../setting/setting";
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any=CasinoPage;
  tab2Root: any=BuscadorPage;
  tab3Root: any=SettingPage;
  constructor() {
  }

  

}
