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
<<<<<<< HEAD
=======
import { CartaNoticiasComponent } from './components/carta-noticias/carta-noticias.component';
>>>>>>> 9eaddb3e1e7c729125e0e5c4eef0d3cbadfb6527

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeScreenComponent,
    ContactScreenComponent,
<<<<<<< HEAD
    NewsScreenComponent
=======
    NewsScreenComponent,
    CartaNoticiasComponent
>>>>>>> 9eaddb3e1e7c729125e0e5c4eef0d3cbadfb6527
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
