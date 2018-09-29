import { Component } from '@angular/core';
import {BuscadorPage } from "../buscador/buscador";
import {HomePage } from "../home/home";
import {CasinoPage } from "../casino/casino";

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage{

  casinos=CasinoPage;
  tipos=BuscadorPage;
  home=HomePage;

  constructor(){

  }

}
