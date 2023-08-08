import { Component, OnInit } from '@angular/core';
import { MoviedbApiService } from '../services/moviedb-api.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.page.html',
  styleUrls: ['./top-rated.page.scss'],
})
export class TopRatedPage implements OnInit {

  topRated: any[] = [];
  images_url = "https://image.tmdb.org/t/p/"

  constructor(private movieService: MoviedbApiService) { }

  ngOnInit() {
    this.movieService.getTopRatedMovies()
      .then(response => {
        console.log(response.data);
        this.topRated = response.data.results;
      })
      
      .catch(error => {
        console.log(error);
      });
  }

}
