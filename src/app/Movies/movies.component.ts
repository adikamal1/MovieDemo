import { Component, OnInit } from '@angular/core';
import { MoviesDataResolverService } from '../services/movies-data-resolver.service';
import { MovieDataModel } from '../models/MovieDataModel';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MovieComponent implements OnInit {

    poster:string;
    movieData:any;
    constructor(public movieDataResolverService:MoviesDataResolverService) {

    this.poster="/yw1qLqwXQORZqNO5aRLZywYSPBr.jpg";
   }

  ngOnInit() {
      this.getTopRatedMoviesToDisplay();
  }
  getTopRatedMoviesToDisplay(){
      this.movieDataResolverService.GetTopRatedMovies().subscribe((resp:MovieDataModel)=>{

        this.movieData=resp;
        console.log(resp);
      });
  }
}
