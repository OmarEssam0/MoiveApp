import { Component } from '@angular/core';
import { MovieDataService } from 'src/app/Core/Services/movie-data.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  topRated: any[] = [];
  firstFourTopRated: any[] = [];
  constructor(private _MovieDataService:MovieDataService){}
  ngOnInit(): void {
    this._MovieDataService.topRated().subscribe({
      next: res => {
        this.topRated = res.results;

        this.firstFourTopRated = this.topRated.slice(0, 4);
        console.log(this.firstFourTopRated);
      }
    })
  }
}
