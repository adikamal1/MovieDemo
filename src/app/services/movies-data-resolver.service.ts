import { Injectable } from '@angular/core';
import { MovieDataService } from './MovieDataService';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataResolverService {

  constructor(public movieDataService:MovieDataService) { }

  GetTopRatedMovies(){
    return this.movieDataService.getTopRatedMovies().pipe(
     map(
         (resp:any) => {
           return resp.results;
         }
         )).pipe(catchError(err => {
             return of(null);
         }));
 }

}
