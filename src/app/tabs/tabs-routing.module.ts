import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'top-rated',
        loadChildren: () => import('../top-rated/top-rated.module').then( m => m.TopRatedPageModule)
      },
      {
        path: 'upcoming',
        loadChildren: () => import('../upcoming/upcoming.module').then( m => m.UpcomingPageModule)
      },
      {
        path: 'popular',
        loadChildren: () => import('../popular/popular.module').then( m => m.PopularPageModule)
      },
      {
        path: 'genre',
        loadChildren: () => import('../genre/genre.module').then( m => m.GenrePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/popular',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/popular',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
