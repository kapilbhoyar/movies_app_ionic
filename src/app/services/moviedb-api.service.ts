import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MoviedbApiService {

  constructor() {}

  baseUrl = 'https://api.themoviedb.org/3/movie/';
  headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGQ1ZGZjYzhlNjAwOWU2ZGNiNGEzNTU2YzIwMTFhMiIsInN1YiI6IjY0OGExN2UwZTI3MjYwMDBlOGMzNGJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GfgdEmBa90aTZS7isMI1DcydOm_ZWkJc_bGbMW38lBQ',
          'api_key': '28d5dfcc8e6009e6dcb4a3556c2011a2'
        }

  getPopularMovies() {
    return axios.get(this.baseUrl + 'popular',
      {
        withCredentials: false,
        headers: this.headers,
      }
    );
  }

  getTopRatedMovies() {
    return axios.get(this.baseUrl + 'top_rated',
      {
        withCredentials: false,
        headers: this.headers,
      }
    );
  }

  getUpcomingMovies() {
    return axios.get(this.baseUrl + 'upcoming',
      {
        withCredentials: false,
        headers: this.headers,
      }
    );
  }

  getMoviesGenre() {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list',
      {
        withCredentials: false,
        headers: this.headers,
      }
    );
  }
}
