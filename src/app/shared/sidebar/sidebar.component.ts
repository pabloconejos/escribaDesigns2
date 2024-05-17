import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  signal,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Observable} from "rxjs";
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit{

  @ViewChild('sidebar') sideBar: ElementRef | undefined;
  @ViewChild('btnToggle') conatiner: ElementRef | undefined;
  toogle: boolean = false;
  tooltips: HTMLElement[] | undefined;
  infoTexto: string = `Conoce a Hernán Escriba, un talentoso artista y diseñador gráfico enfocado en dar vida a la identidad
            visual de los cantantes del género urbano. Va más allá de simples diseños; él crea imágenes que narran
            historias visuales que complementan la música. Cada diseño es una obra maestra que refleja su destreza
            para capturar la esencia de la música urbana y transmitir emociones a través de sus creaciones. Su enfoque
            artístico se destaca por la originalidad en el diseño, una composición cuidadosa y la capacidad innata
            para visualizar la esencia de cada artista en sus obras.`;

  constructor(private el: ElementRef,
              private renderer: Renderer2, private dataService: DataServiceService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Obtener la altura actual de la ventana
    const windowHeight = event.target.innerHeight;

    // Verificar si la altura es menor que 1005 píxeles
    if (windowHeight < 1100) {
      this.infoTexto = 'Conoce a Hernán Escriba, un talentoso artista y diseñador gráfico enfocado en dar vida a la ' +
        'identidad visual de los cantantes del género urbano.'
    }
  }

  ngAfterViewInit(): void {
    this.tooltips = Array.from(document.querySelectorAll('.tooltip span'));
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = (event.clientX + 20) + 'px';
    const y = (event.clientY + 20) + 'px';
    // if si esta el mouse sobre eso
    this.tooltips!.forEach(tooltip => {
      this.renderer.setStyle(tooltip, 'top', y);
      this.renderer.setStyle(tooltip, 'left', x);
    });
  }

  toogleSideBar() {
    if (!this.dataService.mailOpen) {
      var screenWidth = window.innerWidth;
      this.sideBar!.nativeElement.style.transition = "all 0.5s ease";
      this.toogle = !this.toogle;
      if(this.toogle) {
        this.sideBar!.nativeElement.style.left = 0;
      } else {

        if (screenWidth <= 767) {
          this.sideBar!.nativeElement.style.left = '-100vw';
        } else {
          this.sideBar!.nativeElement.style.left = '-610px';
        }

      }
    } else {
      this.dataService.sendMailModal(true)
    }


  }

  openModalMail() {
    const datos = { click: true };
    this.dataService.sendData(datos);
    this.toogleSideBar();
    this.dataService.mailOpen = true;
  }




}
