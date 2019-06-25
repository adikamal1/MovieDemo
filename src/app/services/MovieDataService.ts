
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class MovieDataService{

    constructor(private client:HttpClient)
    {

    }
    getTopRatedMovies()
    {
        return this.client.get(`http://api.themoviedb.org/3/discover/movie/?certification_country=US&sort_by=vote_average.desc&api_key=f6d3f6db6453ec78b55dd0ec7b32c986`);
    }
}
