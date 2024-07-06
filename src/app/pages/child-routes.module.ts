import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GaleriaComponent} from "./galeria/galeria.component";
import {DestacadosComponent} from "./destacados/destacados.component";
import {ContactoComponent} from "./contacto/contacto.component";


const childRoutes: Routes = [

  { path: 'galeria', component: GaleriaComponent },
  { path: 'destacados', component: DestacadosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/galeria', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
