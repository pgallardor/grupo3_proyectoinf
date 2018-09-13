import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CasinoPage } from './casino';

@NgModule({
  declarations: [
    CasinoPage,
  ],
  imports: [
    IonicPageModule.forChild(CasinoPage),
  ],
})
export class CasinoPageModule {}
