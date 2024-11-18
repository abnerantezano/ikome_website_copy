import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CountsComponent } from './components/counts/counts.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    NavmenuComponent,
    ClienteComponent,
    CountsComponent,
    ServicioComponent,
    ProductosComponent,
    MarcaComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
