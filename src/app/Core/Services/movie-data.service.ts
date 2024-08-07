import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  header:string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTM2NGIxYmVjNDBkYjQ4ZWQ2NGQ4YmU5ZTU0MGViNCIsIm5iZiI6MTcyMjQzMjAyMi4xODI0NDcsInN1YiI6IjY1YzkwNDFjNDM1MDExMDE4M2U5Yzc5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5JzFNKCYnRyE0zivBFipyQAbLeX8CrSDM6AwKXcdWz8'

  constructor(private _HttpClient:HttpClient) { }

getAllMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US` , {
      headers:{
        Authorization: this.header
      }
    })
  }
  currentPlay(num:number = 1):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?page=${num}` , {
      headers:{
        Authorization: this.header
      }
    })
  }

comingSoon(num:number =1):Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?page=${num}` , {
      headers:{
         Authorization: this.header
    }
    } )
  }
topRated(num:number = 1):Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/top_rated?page=${num}` , {
      headers:{
         Authorization: this.header
    }
    } )
  }
getSpecMovie(id:number):Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}` , {
      headers:{
         Authorization: this.header
    }
    } )
  }

}
