import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentManagerModule } from '../component/component-manager.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentManagerModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PageModule { }
