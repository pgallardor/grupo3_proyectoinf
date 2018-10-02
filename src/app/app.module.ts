import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BuscadorPage} from "../pages/buscador/buscador";
import {CasinoPage} from "../pages/casino/casino";
import {FAlmuerzoPage} from "../pages/f-almuerzo/f-almuerzo";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {AlmuerzoPorTipoPage} from "../pages/almuerzo-por-tipo/almuerzo-por-tipo";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BuscadorPage,
    CasinoPage,
    FAlmuerzoPage,
    AlmuerzoPorTipoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BuscadorPage,
    CasinoPage,
    FAlmuerzoPage,
    AlmuerzoPorTipoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
