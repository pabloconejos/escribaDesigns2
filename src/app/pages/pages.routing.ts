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
        loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule)
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
