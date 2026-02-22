import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./about/about.component').then((c) => c.AboutComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./contact/contact.component').then((c) => c.ContactComponent),
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./blog/blog-manager/blog-manager.component').then(
            (c) => c.BlogManagerComponent,
          ),
      },
      {
        path: 'blog/:slug',
        loadComponent: () =>
          import('./blog/blog-detail/blog-detail.component').then((c) => c.BlogDetailComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./product/product-manager/product.component').then((c) => c.ProductComponent),
      },
      {
        path: 'products/:slug',
        loadComponent: () =>
          import('./product/product-detail/product-detail.component').then((c) => c.ProductDetailComponent),
      },

      { path: '', redirectTo: 'inicio', pathMatch: 'prefix' },
      { path: '**', redirectTo: 'inicio', pathMatch: 'prefix' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
