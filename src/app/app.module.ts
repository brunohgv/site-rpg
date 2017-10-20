import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from "@angular/router"

import {ROUTES} from "./app.routes"

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontComponent } from './front/front.component';
import { FooterComponent } from './footer/footer.component';
import { MenuMestreComponent } from './menu-mestre/menu-mestre.component';
import { MenuAventureiroComponent } from './menu-aventureiro/menu-aventureiro.component';
import { CatalogoMesasComponent } from './catalogo-mesas/catalogo-mesas.component';
import { CardMesaComponent } from './catalogo-mesas/card-mesa/card-mesa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontComponent,
    FooterComponent,
    MenuMestreComponent,
    MenuAventureiroComponent,
    CatalogoMesasComponent,
    CardMesaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
