import { Component, OnInit } from '@angular/core';
import { MoviedbApiService } from '../services/moviedb-api.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {

  upcoming: any[] = [];
  images_url = "https://image.tmdb.org/t/p/"

  constructor(private movieService: MoviedbApiService) { }

  ngOnInit() {
    this.movieService.getUpcomingMovies()
      .then(response => {
        console.log(response.data);
        this.upcoming = response.data.results;
      })
      
      .catch(error => {
        console.log(error);
      });
  }

}
