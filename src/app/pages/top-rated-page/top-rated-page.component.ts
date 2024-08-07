import { Component } from '@angular/core';
import { MovieDataService } from 'src/app/Core/Services/movie-data.service';

@Component({
  selector: 'app-top-rated-page',
  templateUrl: './top-rated-page.component.html',
  styleUrls: ['./top-rated-page.component.css']
})
export class TopRatedPageComponent {
  topRated:any[] =[]
  pageSize!:number
  p!:number
  total!:number
  constructor(private _MovieDataService:MovieDataService){}

  ngOnInit(): void {
  this.getCurrentPlay()
  }


  getCurrentPlay(){
    this._MovieDataService.topRated().subscribe({
      next: res => {
        this.pageSize = res.results.length
        this.total = res.total_pages
        this.p = res.page
        this.topRated = res.results
      }
    })
  }

  pageChanged(event:any):void{
    this._MovieDataService.topRated(event).subscribe({
      next: res => {
        this.pageSize = res.results.length
        this.total = res.total_pages
        this.p = res.page
        this.topRated = res.results
      }
    })
  }
}
