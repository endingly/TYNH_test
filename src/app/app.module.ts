import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentManagerModule } from './component/component-manager.module';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentManagerModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
