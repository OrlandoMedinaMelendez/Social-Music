import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'music-genres',
        loadChildren: () => import('../music-genres/music-genres.module').then( m => m.MusicGenresPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'banda',
        loadChildren: () => import('../genres/banda/banda.module').then( m => m.BandaPageModule)
      },
      {
        path: 'kpop',
        loadChildren: () => import('../genres/kpop/kpop.module').then( m => m.KpopPageModule)
      },
      {
        path: 'pop',
        loadChildren: () => import('../genres/pop/pop.module').then( m => m.PopPageModule)
      },
      {
        path: 'rock',
        loadChildren: () => import('../genres/rock/rock.module').then( m => m.RockPageModule)
      },
      {
        path: 'electronica',
        loadChildren: () => import('../genres/electronica/electronica.module').then( m => m.ElectronicaPageModule)
      },
    ]
  },
  {
    path:'',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
