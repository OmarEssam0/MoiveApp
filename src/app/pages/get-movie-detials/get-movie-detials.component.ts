import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from 'src/app/Core/Services/movie-data.service';

@Component({
  selector: 'app-get-movie-detials',
  templateUrl: './get-movie-detials.component.html',
  styleUrls: ['./get-movie-detials.component.css']
})
export class GetMovieDetialsComponent {

  id:string= ''
  moiveSpec: any = {}
  constructor(private _MovieDataService:MovieDataService ,
    private _ActivatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next : res => {
        this.id = res['id'];
      }
    })

    this.getMovie(Number(this.id))
  }

  getMovie(id:number){
    this._MovieDataService.getSpecMovie(id).subscribe({
      next : res => {
        console.log(res);
        this.moiveSpec = res

      }
    })
  }

  getBackgroundImage(): string {
    if (this.moiveSpec) {
      return 'https://image.tmdb.org/t/p/w500' + this.moiveSpec.backdrop_path;
    }
    return '';
  }
}
