import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    PagesComponent,
    GaleriaComponent,
    DestacadosComponent,
    ContactoComponent
  ],
  exports: [
    PagesComponent,
    GaleriaComponent,
    DestacadosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
