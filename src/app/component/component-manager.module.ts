import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    CarouselComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class ComponentManagerModule { }
