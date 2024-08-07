import { Component } from '@angular/core';
import { MovieDataService } from 'src/app/Core/Services/movie-data.service';

@Component({
  selector: 'app-current-play',
  templateUrl: './current-play.component.html',
  styleUrls: ['./current-play.component.css']
})
export class CurrentPlayComponent {
  currentPlay: any[] = [];
  firstFourCurrentPlay: any[] = [];
  constructor(private _MovieDataService:MovieDataService){}
  ngOnInit(): void {
    this._MovieDataService.currentPlay().subscribe({
      next: res => {
        this.currentPlay = res.results;

        this.firstFourCurrentPlay = this.currentPlay.slice(0, 4);
        console.log(this.firstFourCurrentPlay);
      }
    })
  }
}
