import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

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
        this.sideBar!.nativeElement.style.left = '-80vw';
      } else {
        this.sideBar!.nativeElement.style.left = '-610px';
      }

    }
    
  }


}
