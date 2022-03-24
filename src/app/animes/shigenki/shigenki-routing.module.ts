import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShigenkiPage } from './shigenki.page';

const routes: Routes = [
  {
    path: '',
    component: ShigenkiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShigenkiPageRoutingModule {}
