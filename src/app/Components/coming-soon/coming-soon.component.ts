import { Component } from '@angular/core';
import { MovieDataService } from 'src/app/Core/Services/movie-data.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent {

  commingSoon: any[] = [];
  firstFourComingSoon: any[] = [];
  constructor(private _MovieDataService:MovieDataService){}
  ngOnInit(): void {
    this._MovieDataService.comingSoon().subscribe({
      next: res => {
        this.commingSoon = res.results;

        this.firstFourComingSoon = this.commingSoon.slice(0, 4);
        console.log(this.firstFourComingSoon);
      }
    })
  }
}
