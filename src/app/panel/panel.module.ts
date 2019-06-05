import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    /*
      Jak tutaj UsersModule jest to działa ścieżka panel/create, która nie powinna
      Jak go zakomentuje to ścieżka już zostaje tylko panel/users/create, ale jest problem z routerLinkiem
      SharedModule jest po to, że jak UsersModule tu nie ma to ten modul nie widzi app-users tagu
    */
    // SharedModule,
    UsersModule
  ],
  bootstrap: [PanelComponent]
})
export class PanelModule { }
