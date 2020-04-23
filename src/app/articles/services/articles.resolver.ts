import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ArticlesService } from './articles.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/Article';

@Injectable()
export class ArticlesResolver implements Resolve<Array<Article>> {
  constructor(private articles: ArticlesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.articles.getAll();
  }
}
