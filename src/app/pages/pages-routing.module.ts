import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaFalopaComponent } from './prueba-falopa/prueba-falopa.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { Prueba3Component } from './prueba3/prueba3.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'prueba-falopa',
        component: PruebaFalopaComponent,
      },
      {
        path: 'prueba2',
        component: Prueba2Component,
      },
      {
        path: 'prueba3',
        component: Prueba3Component,
      },
      {
        path: '**',
        redirectTo: 'prueba-falopa',
      },
    ],
  },
];

// http://localhost:4200/pages/prueba-falopa

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
