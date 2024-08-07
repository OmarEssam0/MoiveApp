import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CurrentPlayPageComponent } from './pages/current-play-page/current-play-page.component';
import { ComingSoonPageComponent } from './pages/coming-soon-page/coming-soon-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GetMovieDetialsComponent } from './pages/get-movie-detials/get-movie-detials.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home" , component:HomePageComponent},
  {path:"currentPage" , component:CurrentPlayPageComponent},
  {path:"comingSoon" , component:ComingSoonPageComponent},
  {path:"topRated" , component:TopRatedPageComponent},
  {path:"movieDetials/:id" , component:GetMovieDetialsComponent},
  {path:"**" ,title:"notFound" ,  component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
