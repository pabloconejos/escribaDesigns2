import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements OnInit{

  @ViewChild('titulo') titulo: ElementRef | undefined;

  @ViewChild('modal_mail') modal_mail: ElementRef | undefined;
  datos: any;
  dataSubscription: any;
  dataSubscriptionModal: any;

  constructor(private dataService: DataServiceService) {
    this.dataSubscription = this.dataService.getData().subscribe(data => {
      this.datos = data;
      this.handlerTittle();
    });

    this.dataSubscriptionModal = this.dataService.getCerrarModal().subscribe(data => {
      console.log(data)
      if (data) {
        setTimeout(()=> {
          this.titulo!.nativeElement.style.transform = "translateY(0)";
        },400)

      }
    });
  }

  ngOnInit(): void {




  }


  handlerTittle() {
    this.titulo!.nativeElement.style.transition = "all 0.8s ease";
    this.titulo!.nativeElement.style.transform = "translateY(-100vh)";
  }


}
