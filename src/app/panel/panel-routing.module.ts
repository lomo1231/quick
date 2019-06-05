import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PanelComponent} from './panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule)
      },
      {
        path: 'articles',
        loadChildren: () => import('./articles/articles.module').then(mod => mod.ArticlesModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {}
