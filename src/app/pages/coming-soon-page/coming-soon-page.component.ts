import { Component } from '@angular/core';
import { MovieDataService } from 'src/app/Core/Services/movie-data.service';

@Component({
  selector: 'app-coming-soon-page',
  templateUrl: './coming-soon-page.component.html',
  styleUrls: ['./coming-soon-page.component.css']
})
export class ComingSoonPageComponent {
  comingSoon:any[] = []
  pageSize!:number
  p!:number
  total!:number
  constructor(private _MovieDataService:MovieDataService){}

  ngOnInit(): void {
  this.getComingSoon()
  }


  getComingSoon(){
    this._MovieDataService.comingSoon().subscribe({
      next: res => {
        this.pageSize = res.results.length
        this.total = res.total_pages
        this.p = res.page
        this.comingSoon = res.results
      }
    })
  }

  pageChanged(event:any):void{
    this._MovieDataService.comingSoon(event).subscribe({
      next: res => {
        this.pageSize = res.results.length
        this.total = res.total_pages
        this.p = res.page
        this.comingSoon = res.results
      }
    })
  }
}
