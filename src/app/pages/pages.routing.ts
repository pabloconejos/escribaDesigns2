import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GaleriaComponent } from './galeria/galeria.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'galeria', component: GaleriaComponent },
            { path: 'destacados', component: DestacadosComponent },
            { path: 'contacto', component: ContactoComponent },
            { path: '', redirectTo: '/galeria', pathMatch: 'full' },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
