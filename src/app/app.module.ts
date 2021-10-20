import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { NewsScreenComponent } from './screens/news-screen/news-screen.component';

import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

import { CartaNoticiasDestacadasComponent } from './components/carta-noticias-destacadas/carta-noticias.component';
import { CartaNoticiasOtroComponent } from './components/carta-noticias-otro/carta-noticias-otro.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeScreenComponent,
    ContactScreenComponent,
    NewsScreenComponent,
    CartaNoticiasDestacadasComponent,
    CartaNoticiasOtroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
