import { Component } from '@angular/core';
import { MovieDataService } from 'src/app/Core/Services/movie-data.service';

@Component({
  selector: 'app-current-play-page',
  templateUrl: './current-play-page.component.html',
  styleUrls: ['./current-play-page.component.css']
})
export class CurrentPlayPageComponent {
  allCurrentPlay:any[] =[]
  pageSize!:number
  p!:number
  total!:number
  constructor(private _MovieDataService:MovieDataService){}

  ngOnInit(): void {
  this.getCurrentPlay()
  }


  getCurrentPlay(){
    this._MovieDataService.currentPlay().subscribe({
      next: res => {
        this.pageSize = res.results.length
        this.total = res.total_pages
        this.p = res.page
        this.allCurrentPlay = res.results
      }
    })
  }

  pageChanged(event:any):void{
    this._MovieDataService.currentPlay(event).subscribe({
      next: res => {
        this.pageSize = res.results.length
        this.total = res.total_pages
        this.p = res.page
        this.allCurrentPlay = res.results
      }
    })
  }
}
