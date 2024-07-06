import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderLeftComponent } from './slider-left/slider-left.component';
import { SliderRightComponent } from './slider-right/slider-right.component';
import { GaleriaScrollComponent } from './galeria-scroll/galeria-scroll.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";


@NgModule({
  declarations: [
    SliderLeftComponent,
    SliderRightComponent,
    GaleriaScrollComponent
  ],
  exports: [
    SliderRightComponent,
    SliderLeftComponent,
    GaleriaScrollComponent
  ],
    imports: [
        CommonModule,
        NgxSkeletonLoaderModule
    ]
})
export class ComponentsModule { }
