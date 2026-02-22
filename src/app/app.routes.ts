import { Routes } from '@angular/router';
import { BASE_ROUTE_URL } from './util/constants';

export const routes: Routes = [
         {
    path: BASE_ROUTE_URL,
    loadChildren: () =>import('./ui/pages/pages.module').then((m) =>m.PagesModule),
    canActivate: []
  },
  {
    path: '',
    redirectTo: `${BASE_ROUTE_URL}`,
    pathMatch: 'prefix'
  },
  {
    path: '**',
    redirectTo: `${BASE_ROUTE_URL}`,
    pathMatch: 'prefix'
  }
];
