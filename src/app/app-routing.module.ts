import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { NewsScreenComponent } from './screens/news-screen/news-screen.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeScreenComponent},
  { path: 'contact', component: ContactScreenComponent},
  { path: 'news', component: NewsScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
