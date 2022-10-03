import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Módulos Personalizados
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

// Componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
