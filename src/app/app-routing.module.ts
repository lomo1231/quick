import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'panel',
    pathMatch: 'full'
  },
  {
    path: 'panel',
    loadChildren: () => import('./panel/panel.module').then(mod => mod.PanelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
