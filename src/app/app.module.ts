import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadearComponent } from './components/headear/headear.component';
import { MenuComponent } from './components/menu/menu.component';
import { DatosComponent } from './components/datos/datos.component';
import { RightComponent } from './components/right/right.component';
import { PostComponent } from './components/post/post.component';
import { PaisComponent } from './components/pais/pais.component';
import { PeruComponent } from './components/peru/peru.component';
import { FooterComponent } from './components/footer/footer.component';
import { MiservicioService } from './services/miservicio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadearComponent,
    MenuComponent,
    DatosComponent,
    RightComponent,
    PostComponent,
    PaisComponent,
    PeruComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MiservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
