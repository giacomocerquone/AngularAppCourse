import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticlesService } from './services/articles.service';
import { ArticlesResolver } from './services/articles.resolver';

const routes = [
  {
    path: '',
    component: ArticlesComponent,
    resolve: {
      articles: ArticlesResolver,
    },
  },
];

@NgModule({
  declarations: [ArticlesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: [ArticlesService, ArticlesResolver],
})
export class ArticlesModule {}
