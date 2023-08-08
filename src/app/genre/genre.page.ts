import { Component, OnInit } from '@angular/core';
import { MoviedbApiService } from '../services/moviedb-api.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.page.html',
  styleUrls: ['./genre.page.scss'],
})
export class GenrePage implements OnInit {

  genre: any[] = [];
  images_url = "https://image.tmdb.org/t/p/"

  constructor(private movieService: MoviedbApiService) { }

  ngOnInit() {
    this.movieService.getMoviesGenre()
      .then(response => {
        console.log(response.data);
        this.genre = response.data.genres;
      })
      
      .catch(error => {
        console.log(error);
      });
  }

}
