import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit{

  @ViewChild('sidebar') sideBar: ElementRef | undefined;
  @ViewChild('btnToggle') conatiner: ElementRef | undefined;
  toogle: boolean = false;

  toogleSideBar() {
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

  }


  tooltips: HTMLElement[] | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {
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


}
