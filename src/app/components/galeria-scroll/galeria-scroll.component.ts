import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-galeria-scroll',
  templateUrl: './galeria-scroll.component.html',
  styleUrl: './galeria-scroll.component.css'
})
export class GaleriaScrollComponent implements AfterViewInit, OnInit{

  imagenes = [
    {
      titulo: 'BACK - ROOM',
      src: '../../../assets/diseños/backroomdifinitiva.png',
      descripcion: '',
    },
    {
      titulo: 'FATAL FANTASY',
      src: '../../../assets/diseños/bueno.png',
      descripcion: '',
    },
    {
      titulo: 'CARTI OPIUM',
      src: '../../../assets/diseños/carti2prueba.png',
      descripcion: '',
    },
    {
      titulo: 'CARTI OPIUM',
      src: '../../../assets/diseños/carti3prueba.png',
      descripcion: '',
    },
    {
      titulo: 'CARTI OPIUM',
      src: '../../../assets/diseños/carti4prueba.png',
      descripcion: '',
    },
    {
      titulo: 'CARTI OPIUM',
      src: '../../../assets/diseños/carti5pruebah.png',
      descripcion: '',
    },
    {
      titulo: 'CARTI OPIUM',
      src: '../../../assets/diseños/cartidefinitivo.png',
      descripcion: '',
    },
    {
      titulo: 'FEID - PARIS',
      src: '../../../assets/diseños/feid_paris.jpg',
      descripcion: '',
    },
    {
      titulo: 'FUTURE',
      src: '../../../assets/diseños/futuredefinitivo.png',
      descripcion: '',
    },
    {
      titulo: 'LEITI',
      src: '../../../assets/diseños/leitiejem.jpg',
      descripcion: '',
    },
    {
      titulo: 'ROBERTO CANO',
      src: '../../../assets/diseños/pablo_hernan_foto.jpg',
      descripcion: '',
    },
    {
      titulo: 'ROBERTO CANO',
      src: '../../../assets/diseños/roberto_verde_bosque2.jpg',
      descripcion: '',
    },
    {
      titulo: 'SAM DAVIES - MOR',
      src: '../../../assets/diseños/samDavies_Mor.jpg',
      descripcion: '',
    },
    {
      titulo: 'LIL TECCA',
      src: '../../../assets/diseños/teccaedl22.png',
      descripcion: '',
    },
    {
      titulo: 'GLOOSITO',
      src: '../../../assets/diseños/yaglockdisparo.png',
      descripcion: '',
    },

  ];

  @ViewChildren('card') cards: QueryList<ElementRef> | undefined;
  @ViewChildren('container') containers: QueryList<ElementRef> | undefined;

  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.cards && this.containers) {
      this.cards.forEach((card, index) => {
        const container = this.containers!.toArray()[index].nativeElement;
  
        // Moving animation event
        container.addEventListener("mousemove", (e: any) => {
          let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
          let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
          // Limit yAxis between -19 and -34
          yAxis = Math.min(34, Math.max(19, yAxis)); // Adjust the range as needed
          card.nativeElement.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
        });
  
        // Animate In
        container.addEventListener("mouseenter", (e: any) => {
          card.nativeElement.style.transition = "none";
        });
  
        // Animate Out
        container.addEventListener("mouseleave", (e: any) => {
          card.nativeElement.style.transition = "all 0.5s ease";
          card.nativeElement.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
      });
    }
  }





}
