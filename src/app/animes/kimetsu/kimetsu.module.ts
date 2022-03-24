import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KimetsuPageRoutingModule } from './kimetsu-routing.module';

import { KimetsuPage } from './kimetsu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KimetsuPageRoutingModule
  ],
  declarations: [KimetsuPage]
})
export class KimetsuPageModule {}
