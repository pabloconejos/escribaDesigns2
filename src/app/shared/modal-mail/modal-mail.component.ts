import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-modal-mail',
  templateUrl: './modal-mail.component.html',
  styleUrl: './modal-mail.component.css'
})
export class ModalMailComponent {

  @ViewChild('modal_mail') modal_mail: ElementRef | undefined;
  datos: any;
  dataSubscription: any;

  constructor(private dataService: DataServiceService) {
    this.dataSubscription = this.dataService.getData().subscribe(data => {
      this.datos = data;
      if (data.click) { this.handlerModal('mostrar')  }

      console.log(data)
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  handlerModal(tipo: any) {

    switch (tipo) {
      case 'mostrar':
        this.modal_mail!.nativeElement.style.transition = "all 0.5s ease";
        this.modal_mail!.nativeElement.style.bottom = '0';
        break;
      case 'ocultar':
        this.modal_mail!.nativeElement.style.transition = "all 0.5s ease";
        this.modal_mail!.nativeElement.style.bottom = '-100vh';
        break;
    }

  }

}
