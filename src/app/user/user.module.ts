import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';



console.warn('user lazy loading ');

@NgModule({
  declarations: [
    LoginComponent
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
