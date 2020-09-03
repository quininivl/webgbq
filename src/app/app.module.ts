import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { GisComponent } from './pages/gis/gis.component';
import { DevComponent } from './pages/dev/dev.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Slider1Component } from './shared/slider1/slider1.component';
import { Grid1Component } from './shared/grid1/grid1.component';
import { Content1Component } from './shared/content1/content1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    GisComponent,
    DevComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    Slider1Component,
    Grid1Component,
    Content1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
