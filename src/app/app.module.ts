import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HeaderComponent } from './Components/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import{HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentPlayComponent } from './Components/current-play/current-play.component';
import { ComingSoonComponent } from './Components/coming-soon/coming-soon.component';
import { TopRatedComponent } from './Components/top-rated/top-rated.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CurrentPlayPageComponent } from './pages/current-play-page/current-play-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { ComingSoonPageComponent } from './pages/coming-soon-page/coming-soon-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GetMovieDetialsComponent } from './pages/get-movie-detials/get-movie-detials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    CurrentPlayComponent,
    ComingSoonComponent,
    TopRatedComponent,
    HomePageComponent,
    CurrentPlayPageComponent,
    TopRatedPageComponent,
    ComingSoonPageComponent,
    NotFoundComponent,
    GetMovieDetialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
