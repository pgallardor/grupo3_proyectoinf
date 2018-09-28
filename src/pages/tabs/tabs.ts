import { Component } from '@angular/core';
import {BuscadorPage } from "../buscador/buscador";
import {HomePage } from "../home/home";
import {CasinoPage } from "../casino/casino";

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage{

  ofertas=BuscadorPage;
  categorias=CasinoPage;
  home=HomePage;

  constructor(){

  }

}
