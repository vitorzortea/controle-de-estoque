import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'add',
        component: AddUserComponent
      },
      {
        path: 'recuperar',
        component: RecuperarComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
