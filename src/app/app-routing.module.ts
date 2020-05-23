import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'music-genres',
    loadChildren: () => import('./pages/music-genres/music-genres.module').then( m => m.MusicGenresPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'music-genres',
    loadChildren: () => import('./music-genres/music-genres.module').then( m => m.MusicGenresPageModule)
  },  {
    path: 'banda',
    loadChildren: () => import('./banda/banda.module').then( m => m.BandaPageModule)
  },
  {
    path: 'kpop',
    loadChildren: () => import('./kpop/kpop.module').then( m => m.KpopPageModule)
  },
  {
    path: 'pop',
    loadChildren: () => import('./pop/pop.module').then( m => m.PopPageModule)
  },
  {
    path: 'rock',
    loadChildren: () => import('./rock/rock.module').then( m => m.RockPageModule)
  },
  {
    path: 'electronica',
    loadChildren: () => import('./electronica/electronica.module').then( m => m.ElectronicaPageModule)
  },

 ];
    path: '',
    redirectTo: '/tabs/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
