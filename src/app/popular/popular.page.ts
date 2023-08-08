import { Component, OnInit } from '@angular/core';
// import { HttpServiceService } from '../services/http-service.service';
import { MoviedbApiService } from '../services/moviedb-api.service';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
})
export class PopularPage implements OnInit {

  movies: any[] = [];
  images_url = "https://image.tmdb.org/t/p/"

  constructor(private movieService: MoviedbApiService) { }

  ngOnInit() {
    this.movieService.getPopularMovies()
      .then(response => {
        console.log(response.data);
        this.movies = response.data.results;
      })
      
      .catch(error => {
        console.log(error);
      });
  }

}
