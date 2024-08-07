import { Component } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { movieData } from 'src/app/Core/InterFace/movie-data';
import { MovieDataService } from 'src/app/Core/Services/movie-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  moivesData!:movieData[]
  selectedSlideIndex:number = 0
  constructor(private _MovieDataService:MovieDataService){}
  ngOnInit(): void {
    this.getAllMovie()
  }

  getAllMovie(){
    this._MovieDataService.getAllMovies().subscribe({
      next: res => {this.moivesData = res.results

      }

    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    dots: false,
    // navSpeed: 700,
    smartSpeed:700,
    margin: 20,
    URLhashListener: true,
    navText: ['<', '>'],

    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: false
  }
  onSlideChange(event: SlidesOutputData): void {
    this.selectedSlideIndex = event.startPosition || 0;
  }

  getBackgroundImage(): string {
    if (this.moivesData.length >= 0) {
      return 'https://image.tmdb.org/t/p/w500' + this.moivesData[this.selectedSlideIndex].backdrop_path;
    }
    return '';
  }
}
