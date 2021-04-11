import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { RecuperarComponent } from './recuperar/recuperar.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, AddUserComponent, RecuperarComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ]
})
export class AuthModule { }
