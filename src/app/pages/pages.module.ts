import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PruebaFalopaComponent } from './prueba-falopa/prueba-falopa.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { Prueba3Component } from './prueba3/prueba3.component';

@NgModule({
  declarations: [PruebaFalopaComponent, Prueba2Component, Prueba3Component],
  imports: [CommonModule, PagesRoutingModule],
  exports: [PruebaFalopaComponent, Prueba2Component, Prueba3Component],
})
export class PagesModule {}
