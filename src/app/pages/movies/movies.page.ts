import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType } from 'src/app/services/movie.service';
import {MovieService} from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  public results: Observable<any>;
  public searchTerm = '';
  public type = SearchType.all;

  constructor(private readonly movieService: MovieService) { }

  public ngOnInit() {
  }

  public searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type);

    // this.results.subscribe(res => {

    // })
  }

}
