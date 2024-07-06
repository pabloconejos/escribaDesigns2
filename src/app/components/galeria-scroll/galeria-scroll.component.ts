import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {EdService} from "../../services/ed.service";

@Component({
  selector: 'app-galeria-scroll',
  templateUrl: './galeria-scroll.component.html',
  styleUrl: './galeria-scroll.component.css'
})
export class GaleriaScrollComponent implements AfterViewInit, OnInit{

  images2 = [
    {
      title: 'BACK - ROOM',
      url_s3: 'https://escriba-bucket-s3.s3.eu-north-1.amazonaws.com/backroomdifinitiva.jpg',
      thanksto: '@playboicarti',
      development: 'Photoshop',
      category: 'Portadas Musicales',
      description: `En este diseño inmersivo, el icónico estilo de Playboy Carti cobra vida en una portada nocturna,
      donde la estética opium se entrelaza con la oscuridad envolvente. En el centro de la composición, Carti emerge
      como el protagonista indiscutible, su figura envuelta en un aura de misterio y seducción. Sentado en un trono
      improvisado, su atuendo exuda un aire de rebeldía militar, fusionándose con la atmósfera nocturna. La luz de
      un flash lo ilumina, resaltando sus rasgos angulares y su mirada penetrante.`,

    },
    {
      title: 'CRUZ CAFUNE',
      url_s3: 'https://escriba-bucket-s3.s3.eu-north-1.amazonaws.com/cruzzi_dessert.jpg',
      thanksto: '@cruzcafune',
      development: 'Photoshop',
      category: 'Portadas Musicales',
      description: `Diseño inspirado en el videclip de dios #1 de cruzcafune. En este video el protagonista se
      encuentra en un desierto, y he querido que el letering encaje perfectamente con la estetica del video`,
    },
    {
      title: 'FATAL FANTASY',
      url_s3: 'https://escriba-bucket-s3.s3.eu-north-1.amazonaws.com/fatalFantansy.jpeg',
      thanksto: '@alvaritodiaz',
      development: 'Photoshop',
      category: 'Portadas Musicales',
      description: `En el corazón de un diseño que emana una estética única y un aura de misterio, se encuentra
      Álvaro Díaz, el talentoso artista detrás de la canción "Fatal Fantasy", producida por el genio musical Tainy.
      Este diseño es más que una simple representación visual; es una ventana a un mundo de sonidos y emociones..`,
    },
    {
      title: 'VICINITY',
      url_s3: 'https://escriba-bucket-s3.s3.eu-north-1.amazonaws.com/vicinity.jpeg',
      thanksto: '@vicinity ',
      development: 'Photoshop',
      category: 'Campañas Publicitarias',
      description: `Concepto de campaña publicitaria de la marca vicinity para su drop de invierno de puffer jackets,
       con dos diseños ineditos  `,
    },
    {
      title: 'CARTI OPIUM',
      url_s3: 'https://escriba-bucket-s3.s3.eu-north-1.amazonaws.com/carti2prueba.jpg',
      thanksto: '@playboicarti',
      development: 'Photoshop',
      category: 'Portadas Musicales',
      description: `En este diseño inmersivo, el icónico estilo de Playboy Carti cobra vida en una portada nocturna,
      donde la estética opium se entrelaza con la oscuridad envolvente. En el centro de la composición, Carti emerge
      como el protagonista indiscutible, su figura envuelta en un aura de misterio y seducción. Sentado en un trono
      improvisado, su atuendo exuda un aire de rebeldía militar, fusionándose con la atmósfera nocturna.`,
    },
    {
      title: 'FEID - PARIS',
      url_s3: 'https://escriba-bucket-s3.s3.eu-north-1.amazonaws.com/feid_paris.jpg',
      thanksto: '@feid',
      development: 'Photoshop',
      category: 'Portadas Musicales',
      description: `En este deslumbrante diseño, Feid y Paris comparten el escenario de un concierto en Europa,
      inmersos en una estética verde y brillante que abraza la esencia artística de Feid. En la esquina, Feid emerge,
      mientras Paris se ubica a su lado, fusionando sus vibraciones creativas La paleta de colores, rica en tonos
      verdes, se despliega resonando con la frescura y la energía de la música de Feid.`,
    },
    {
      title: 'FUTURE',
      url_s3: 'https://escriba-bucket-s3.s3.eu-north-1.amazonaws.com/futuredefinitivo.jpg',
      thanksto: '@acid.vk - The photographer who took the photo.',
      development: 'Photoshop',
      category: 'Portadas Musicales',
      description: `En un universo donde el pasado se entrelaza con el futuro, emerge un diseño que rinde homenaje a
      la estética y la vibra del Y2K. En el centro de este lienzo visual, se alza un chico que encarna la esencia misma
      de esa era, con su estilo desenfadado y su mirada hacia adelante..`,
    },
    {
      title: 'ROBERTO CANO',
      url_s3: 'https://escriba-bucket-s3.s3.eu-north-1.amazonaws.com/pablo_hernan_foto.jpg',
      thanksto: '@robb.3r, @pabsdalegas, @jav111er, @jaumats ',
      development: 'Photoshop',
      category: 'Portadas Musicales',
      description: `En este diseño, Roberto se convierte en el protagonista de una sesión de fotos atemporal,
      capturando la esencia nostálgica de los años 90. Inspirado por la estética vintage, cada elemento es una
      reminiscencia de una revista de la época, teñida con tonos cálidos y efectos que evocan una aura retro. En el
      escenario de la Albufera, la figura principal se yergue como si fuera la portada de una revista clásica. `
    },
    {
      title: 'GLOOSITO',
      url_s3: 'https://escriba-bucket-s3.s3.eu-north-1.amazonaws.com/yaglockdisparo.jpg',
      thanksto: '@gloosito',
      development: 'Photoshop',
      category: 'Portadas Musicales',
      description: `En el lienzo digital de la creatividad, se revela un boceto que encapsula el espíritu vibrante y
      enérgico de Gloosito, el rapero español conocido por su estilo distintivo inspirado en el rap de Detroit. En
      este diseño, las líneas y trazos se entrelazan para dar vida a la esencia misma de su arte.`,
    },

  ];
  images: any[] = []

  @ViewChildren('card') cards: QueryList<ElementRef> | undefined;
  @ViewChildren('container') containers: QueryList<ElementRef> | undefined;

  constructor(private edService: EdService) { }
  ngOnInit(): void {

    setTimeout(()=> {
      this.animatedImg()
    },300)

    /*this.edService.getDesigns().subscribe((response) => {
      console.log(response)
      this.images2 = response
      setTimeout(()=> {
        this.animatedImg()
      },10)

    })*/
  }



  ngAfterViewInit() {


  }

  animatedImg() {
    if (this.cards && this.containers) {
      console.log(this.cards)
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


  img64(imagen_base64: any) {
    return 'data:image/jpeg;base64,' + imagen_base64
  }
}
