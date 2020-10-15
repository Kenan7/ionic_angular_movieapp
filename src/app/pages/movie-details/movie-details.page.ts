import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;

  constructor(private readonly activatedRoute: ActivatedRoute, 
              private readonly movieService: MovieService) { }

  public ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.getDetails(id).subscribe(
      (results) => {
        this.information = results;
      }
    );
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
