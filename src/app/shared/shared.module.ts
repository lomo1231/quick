import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from '../panel/users/create/create.component';
import { UsersComponent } from '../panel/users/users.component';

@NgModule({
  declarations: [
    CreateComponent, UsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateComponent, UsersComponent
  ]
})
export class SharedModule { }
