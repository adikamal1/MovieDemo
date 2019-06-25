import { Component, OnInit } from '@angular/core';
import { MoviesDataResolverService } from '../services/movies-data-resolver.service';
import { MovieDataModel } from '../models/MovieDataModel';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MovieComponent implements OnInit {

    movieData:any;
    constructor(public movieDataResolverService:MoviesDataResolverService) {}

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
