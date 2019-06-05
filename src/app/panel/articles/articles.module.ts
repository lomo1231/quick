import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { CreateComponent } from './create/create.component';
import { ArticlesComponent } from './articles.component';

@NgModule({
  declarations: [ArticlesComponent, CreateComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
  ],
  exports: [
    ArticlesComponent
  ]
})
export class ArticlesModule { }
