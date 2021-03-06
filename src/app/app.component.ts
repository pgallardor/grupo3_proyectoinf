import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MapsPage} from '../pages/maps/maps';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BuscadorPage } from "../pages/buscador/buscador";
import {CasinoPage} from "../pages/casino/casino";
import {TabsPage} from "../pages/tabs/tabs";
import {FAlmuerzoPage} from "../pages/f-almuerzo/f-almuerzo";
import {AlmuerzoPorTipoPage} from "../pages/almuerzo-por-tipo/almuerzo-por-tipo";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Buscador', component: BuscadorPage },
      { title: 'Casinos', component: CasinoPage},
      {title: 'tabs',component:TabsPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
