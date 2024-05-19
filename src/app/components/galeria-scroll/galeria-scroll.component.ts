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
      s_o: '@playboicarti',
      descripcion: `En este diseño inmersivo, el icónico estilo de Playboy Carti cobra vida en una portada nocturna,
      donde la estética opium se entrelaza con la oscuridad envolvente. En el centro de la composición, Carti emerge
      como el protagonista indiscutible, su figura envuelta en un aura de misterio y seducción. Sentado en un trono
      improvisado, su atuendo exuda un aire de rebeldía militar, fusionándose con la atmósfera nocturna. La luz de
      un flash lo ilumina, resaltando sus rasgos angulares y su mirada penetrante. A su lado, una figura cromada
      verde se alza con prominencia, sus formas sinuosas y tonalidades brillantes en perfecta armonía con el entorno.
       Esta figura parece cobrar vida propia, como si fuera una manifestación de los sueños más profundos de Carti.
       El diseño en conjunto emana una energía hipnótica, atrayendo al espectador hacia un mundo donde la realidad y
       la fantasía se entrelazan sin límites.`,

    },
    {
      titulo: 'FATAL FANTASY',
      src: '../../../assets/diseños/bueno.png',
      s_o: '@alvaritodiaz',
      descripcion: `En el corazón de un diseño que emana una estética única y un aura de misterio, se encuentra
      Álvaro Díaz, el talentoso artista detrás de la canción "Fatal Fantasy", producida por el genio musical Tainy.
      Este diseño es más que una simple representación visual; es una ventana a un mundo de sonidos y emociones.
      Álvaro Díaz se sitúa en el centro de la escena, rodeado por una neblina de colores oscuros y vibrantes. Su
      presencia enigmática está acentuada por la atmósfera electrónica que lo rodea, evocando el espíritu de la
      canción y su intrincada mezcla de sonidos contemporáneos.`,
    },
    {
      titulo: 'CARTI OPIUM',
      src: '../../../assets/diseños/carti2prueba.png',
      s_o: '@playboicarti',
      descripcion: `En este diseño inmersivo, el icónico estilo de Playboy Carti cobra vida en una portada nocturna,
      donde la estética opium se entrelaza con la oscuridad envolvente. En el centro de la composición, Carti emerge
      como el protagonista indiscutible, su figura envuelta en un aura de misterio y seducción. Sentado en un trono
      improvisado, su atuendo exuda un aire de rebeldía militar, fusionándose con la atmósfera nocturna. La luz de
      un flash lo ilumina, resaltando sus rasgos angulares y su mirada penetrante. A su lado, una figura cromada
      verde se alza con prominencia, sus formas sinuosas y tonalidades brillantes en perfecta armonía con el entorno.
       Esta figura parece cobrar vida propia, como si fuera una manifestación de los sueños más profundos de Carti.
       El diseño en conjunto emana una energía hipnótica, atrayendo al espectador hacia un mundo donde la realidad y
       la fantasía se entrelazan sin límites.`,
    },
    {
      titulo: 'CARTI OPIUM',
      src: '../../../assets/diseños/carti3prueba.png',
      s_o: '@playboicarti',
      descripcion: `En este diseño inmersivo, el icónico estilo de Playboy Carti cobra vida en una portada nocturna,
      donde la estética opium se entrelaza con la oscuridad envolvente. En el centro de la composición, Carti emerge
      como el protagonista indiscutible, su figura envuelta en un aura de misterio y seducción. Sentado en un trono
      improvisado, su atuendo exuda un aire de rebeldía militar, fusionándose con la atmósfera nocturna. La luz de
      un flash lo ilumina, resaltando sus rasgos angulares y su mirada penetrante. A su lado, una figura cromada
      verde se alza con prominencia, sus formas sinuosas y tonalidades brillantes en perfecta armonía con el entorno.
       Esta figura parece cobrar vida propia, como si fuera una manifestación de los sueños más profundos de Carti.
       El diseño en conjunto emana una energía hipnótica, atrayendo al espectador hacia un mundo donde la realidad y
       la fantasía se entrelazan sin límites.`,
    },
    {
      titulo: 'CARTI OPIUM',
      src: '../../../assets/diseños/carti5pruebah.png',
      s_o: '@playboicarti',
      descripcion: `En este diseño inmersivo, el icónico estilo de Playboy Carti cobra vida en una portada nocturna,
      donde la estética opium se entrelaza con la oscuridad envolvente. En el centro de la composición, Carti emerge
      como el protagonista indiscutible, su figura envuelta en un aura de misterio y seducción. Sentado en un trono
      improvisado, su atuendo exuda un aire de rebeldía militar, fusionándose con la atmósfera nocturna. La luz de
      un flash lo ilumina, resaltando sus rasgos angulares y su mirada penetrante. A su lado, una figura cromada
      verde se alza con prominencia, sus formas sinuosas y tonalidades brillantes en perfecta armonía con el entorno.
       Esta figura parece cobrar vida propia, como si fuera una manifestación de los sueños más profundos de Carti.
       El diseño en conjunto emana una energía hipnótica, atrayendo al espectador hacia un mundo donde la realidad y
       la fantasía se entrelazan sin límites.`,
    },
    {
      titulo: 'CARTI OPIUM',
      src: '../../../assets/diseños/cartidefinitivo.png',
      s_o: '@playboicarti',
      descripcion: `En este diseño inmersivo, el icónico estilo de Playboy Carti cobra vida en una portada nocturna,
      donde la estética opium se entrelaza con la oscuridad envolvente. En el centro de la composición, Carti emerge
      como el protagonista indiscutible, su figura envuelta en un aura de misterio y seducción. Sentado en un trono
      improvisado, su atuendo exuda un aire de rebeldía militar, fusionándose con la atmósfera nocturna. La luz de
      un flash lo ilumina, resaltando sus rasgos angulares y su mirada penetrante. A su lado, una figura cromada
      verde se alza con prominencia, sus formas sinuosas y tonalidades brillantes en perfecta armonía con el entorno.
       Esta figura parece cobrar vida propia, como si fuera una manifestación de los sueños más profundos de Carti.
       El diseño en conjunto emana una energía hipnótica, atrayendo al espectador hacia un mundo donde la realidad y
       la fantasía se entrelazan sin límites.`,
    },
    {
      titulo: 'FEID - PARIS',
      src: '../../../assets/diseños/feid_paris.jpg',
      s_o: '@feid',
      descripcion: `En este deslumbrante diseño, Feid y Paris comparten el escenario de un concierto en Europa,
      inmersos en una estética verde y brillante que abraza la esencia artística de Feid. En la esquina, Feid emerge,
      mientras Paris se ubica a su lado, fusionando sus vibraciones creativas La paleta de colores, rica en tonos
      verdes, se despliega resonando con la frescura y la energía de la música de Feid. En la imagen, se dispersan
      varios fantasmas, inspirados en el último álbum de Feid, añadiendo un toque etéreo y misterioso. En resumen,
      este diseño es una oda visual al concierto de Feid en París durante su gira europea.`,
    },
    {
      titulo: 'FUTURE',
      src: '../../../assets/diseños/futuredefinitivo.png',
      s_o: '@acid.vk - The photographer who took the photo.',
      descripcion: `En un universo donde el pasado se entrelaza con el futuro, emerge un diseño que rinde homenaje a
      la estética y la vibra del Y2K. En el centro de este lienzo visual, se alza un chico que encarna la esencia misma
      de esa era, con su estilo desenfadado y su mirada hacia adelante. Envuelto en tonos azules que evocan la
      tecnología y la innovación, su presencia es un recordatorio de la conexión entre lo retro y lo futurista.
      El lettering que se despliega en el diseño, simple pero poderoso, proclama una sola palabra: "Future". Es un
      eco del impulso constante hacia adelante, una invitación a mirar más allá de los límites del presente y a
      abrazar las posibilidades infinitas que aguardan en el horizonte.`,
    },
    {
      titulo: 'LEÏTI',
      src: '../../../assets/diseños/leitiejem.jpg',
      s_o: '@leitisene',
      descripcion: `En el vasto lienzo de la creatividad, emerge un oasis de estilo donde la esencia de la marca de
      lujo Blueberry se fusiona con la mística del desierto. En esta obra, Leiti sene se convierte en la inspiracion
      que enciende la paleta de colores con tonalidades amarillas y azules, inspiradas en el resplandor dorado del
      sol sobre la arena ardiente. La tipografía, una combinación elegante entre letras de revistas y tonos metálicos,
       crea un juego visual que captura la atención como un destello de oro. Cada letra es una joya que cuenta la
       historia del lujo y la sofisticación, tallada en el mismo metal precioso que adorna el universo Blueberry.
       En su mano , un toque de ingenio se despliega con destreza. Leiti Sene, en una versión miniatura, se adorna c
       on la indumentaria distintiva de Blueberry, integrándose perfectamente en el escenario del desierto.`,
    },
    {
      titulo: 'ROBERTO CANO',
      src: '../../../assets/diseños/pablo_hernan_foto.jpg',
      s_o: '@robb.3r, @pabsdalegas, @jav111er, @jaumats ',
      descripcion: `En este evocador diseño, Roberto se convierte en el protagonista de una sesión de fotos atemporal,
      capturando la esencia nostálgica de los años 90. Inspirado por la estética vintage, cada elemento es una
      reminiscencia de una revista de la época, teñida con tonos cálidos y efectos que evocan una aura retro. En el
      escenario de la Albufera, la figura principal se yergue como si fuera la portada de una revista clásica.
      La fotografía, impregnada de texturas y detalles, se presenta con un aspecto envejecido, como si hubiera
      sido desenterrada de los archivos de una época pasada. Las letras rojas, puntiagudas y de estilo spooky,
       añaden un toque de misterio y drama. Se sitúan en la parte superior, contrastando con la imagen como
       un título sugerente de aquellas revistas intrigantes. Un amanecer rojo sirve como telón de fondo,
       inyectando intensidad y emotividad a la composición. `
    },
    {
      titulo: 'ROBERTO CANO',
      src: '../../../assets/diseños/roberto_verde_bosque2.jpg',
      s_o: '@robb.3r, @pabsdalegas, @jav111er, @jaumats ',
      descripcion: `En este diseño inmersivo, nuestro amigo Pabsdalegas se convierte en el protagonista de una sesión
      de fotos nocturna, donde la mezcla de elementos crea una escena onírica y viva. Sentado en un árbol, iluminado
      por un flash, su atuendo militar se fusiona con la oscuridad de la noche. Destacando en la composición, una
      figura cromada verde se despliega de manera prominente. La forma y tonalidad de esta figura se sincronizan
      con los colores de la fotografía, creando una armonía visual que resalta el protagonismo de Pabsdalegas.
      El diseño, dominando gran parte de la imagen, parece brillar con una luz interna, como si fuera una
      manifestación de un sueño.`,
    },
    {
      titulo: 'SAM DAVIES - MOR',
      src: '../../../assets/diseños/samDavies_Mor.jpg',
      s_o: '@malditopapi, @aleesha ',
      descripcion: `Este diseño es una ventana a la energía vibrante y la conexión palpable que Sam Davies y Alesha
      transmiten en su colaboración musical, "Mor". La imagen captura el espíritu juguetón y divertido de la canción,
      llevándonos a un viaje visual único. En el centro de la escena, Sam Davies se eleva sobre una moto de nieve,
       presentando con entusiasmo la canción. Las montañas, majestuosas y como testigos silenciosos, forman el telón
       de fondo de esta historia invernal. Sobre ellas, una aurora boreal verde ilumina la escena, reflejando el color
        principal de "Mor" con una luminosidad vibrante. `,
    },
    {
      titulo: 'LIL TECCA',
      src: '../../../assets/diseños/teccaedl22.png',
      s_o: '@liltecca, @galactic, @republicrecords',
      descripcion: `En el vasto océano de la creatividad, emerge un diseño que captura la esencia única del universo
      visual de Lil Tecca. Sentado serenamente en una isla flotante, rodeado de un rebaño de ovejas que parecen bailar
      al ritmo de su música, el rapero se convierte en el protagonista indiscutible de este paisaje surrealista.
      La isla flotante, suspendida en el aire como un sueño hecho realidad, es un reflejo del mundo imaginativo de Lil Tecca,
     donde la realidad se mezcla con la fantasía. Las ovejas, con sus pelajes suaves y sus ojos curiosos, añaden un toque
     de encanto y misterio a la escena, como si fueran guardianes de este reino onírico.`,
    },
    {
      titulo: 'GLOOSITO',
      src: '../../../assets/diseños/yaglockdisparo.png',
      s_o: '@gloosito',
      descripcion: `En el lienzo digital de la creatividad, se revela un boceto que encapsula el espíritu vibrante y
      enérgico de Gloosito, el rapero español conocido por su estilo distintivo inspirado en el rap de Detroit. En
      este diseño, las líneas y trazos se entrelazan para dar vida a la esencia misma de su arte.
      Gloosito emerge en el centro del boceto, su figura dinámica y llena de movimiento capturada
      en un instante de inspiración. Su presencia irradia la pasión y el compromiso con su arte,
      mientras que los elementos que lo rodean dan pistas sutiles sobre su conexión con el estilo
      Detroit, un guiño a sus raíces musicales.`,
    },

  ];

  @ViewChildren('card') cards: QueryList<ElementRef> | undefined;
  @ViewChildren('container') containers: QueryList<ElementRef> | undefined;

  constructor() { }
  ngOnInit(): void {
  }
  positionTop: number = 100; // start at 100vh


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
