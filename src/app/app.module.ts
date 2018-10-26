import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {TabsPage} from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BuscadorPage} from "../pages/buscador/buscador";
import {CasinoPage} from "../pages/casino/casino";
import {HttpClientModule} from "@angular/common/http";
import {SettingPage} from "../pages/setting/setting";
import {FAlmuerzoPage} from "../pages/f-almuerzo/f-almuerzo";
import {AlmuerzoPorTipoPage} from "../pages/almuerzo-por-tipo/almuerzo-por-tipo";
import { ComponentsModule } from '../components/components.module';
import {MapsPage} from "../pages/maps/maps";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BuscadorPage,
    CasinoPage,
    SettingPage,
    TabsPage,
    FAlmuerzoPage,
    MapsPage,
    AlmuerzoPorTipoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BuscadorPage,
    CasinoPage,
    SettingPage,
    TabsPage,
    FAlmuerzoPage,
    MapsPage,
    AlmuerzoPorTipoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
