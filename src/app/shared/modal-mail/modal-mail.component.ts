import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import {first} from "rxjs";
import {environment} from "../../../environments/environment";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-modal-mail',
  templateUrl: './modal-mail.component.html',
  styleUrl: './modal-mail.component.css'
})
export class ModalMailComponent {

  @ViewChild('modal_mail') modal_mail: ElementRef | undefined;
  @ViewChild('titulo') titulo: ElementRef | undefined;

  datos: any;
  dataSubscription: any;
  mailSubscription: any;

  email: any;
  first_name: any;
  last_name: any;
  message: any;

  constructor(private dataService: DataServiceService) {

    this.dataSubscription = this.dataService.getData().subscribe(data => {
      this.datos = data;
      if (data.click) { this.handlerModal('mostrar')  }
      setTimeout(()=>{
        this.handlerTittle();
      },200)
    });

    this.mailSubscription = this.dataService.getmailModal().subscribe( data => {
      this.handlerModal('ocultar');
      this.dataService.mailOpen = false
    })

  }


  handlerModal(tipo: any) {

    switch (tipo) {
      case 'mostrar':
        this.titulo!.nativeElement.style.opacity = "1";
        this.modal_mail!.nativeElement.style.transition = "bottom 0.5s ease";
        this.modal_mail!.nativeElement.style.bottom = '0';
        break;
      case 'ocultar':
        this.modal_mail!.nativeElement.style.transition = "bottom 0.5s ease";
        this.modal_mail!.nativeElement.style.bottom = '-100vh';
        this.dataService.sendCerrarModal(true);

        setTimeout(()=>{
          this.titulo!.nativeElement.style.opacity = "0";
          this.titulo!.nativeElement.style.top = "-200vh";
        },1000)
        break;
    }

  }

  handlerTittle() {
    this.titulo!.nativeElement.style.transition = "top 0.8s ease";
    var screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      this.titulo!.nativeElement.style.top = "100px";
    } else {
      this.titulo!.nativeElement.style.top = "0";
    }

  }



  sendEmail(e: Event) {
    e.preventDefault();
    console.log(e.target)
    emailjs
      .sendForm(environment.EMAIL_SERVICE_ID, environment.EMAIL_TEMPLATE_ID, e.target as HTMLFormElement, {
        publicKey: environment.EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.cleanForm();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }


  private cleanForm() {
    this.message = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
  }
}
