import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import endpoints from 'src/app/shared/endpoints';
import { ArticlesModule } from '../articles.module';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Article } from 'src/app/shared/models/Article';

@Injectable()
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(endpoints.articles).pipe(
      map((res: { articles: Array<Article> }) => {
        return res.articles;
      })
    );
  }
}
