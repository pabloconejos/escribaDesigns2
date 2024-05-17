import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterLink} from "@angular/router";
import { ModalMailComponent } from './modal-mail/modal-mail.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ModalMailComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ModalMailComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        FormsModule
    ]
})
export class SharedModule { }
