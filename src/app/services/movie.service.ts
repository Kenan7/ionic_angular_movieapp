import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public url = 'http://www.omdbapi.com/';
  public apiKey = 'a72c2e5e';

  constructor(private readonly http: HttpClient) { }
/* tslint:disable:no-string-literal */
  public searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?apikey=${this.apiKey}&s=${encodeURI(title)}&type=${type}`)
    .pipe(
      map((results) => {
        console.log('RAW: ', results);

        return results['Search'];
      })
    );

  }

  public getDetails(id) {
    return this.http.get(`${this.url}?apikey=${this.apiKey}&i=${id}&plot=full`);
  }
/* tslint:enable:no-string-literal */

}
