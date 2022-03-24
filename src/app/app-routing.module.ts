import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'jujutsukaisen',
    loadChildren: () => import('./animes/jujutsukaisen/jujutsukaisen.module').then( m => m.JujutsukaisenPageModule)
  },  {
    path: 'kimetsu',
    loadChildren: () => import('./animes/kimetsu/kimetsu.module').then( m => m.KimetsuPageModule)
  },
  {
    path: 'shigenki',
    loadChildren: () => import('./animes/shigenki/shigenki.module').then( m => m.ShigenkiPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
