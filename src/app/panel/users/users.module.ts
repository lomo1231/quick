import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateComponent } from './create/create.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent, CreateComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    // SharedModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
