import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { RouterModule, Routes } from '@angular/router';
import { StatistikComponent } from './statistik/statistik.component';


const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'statistik', component: StatistikComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FeatureComponent,
    AboutusComponent,
    StatistikComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
