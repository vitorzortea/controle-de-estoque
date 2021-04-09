import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterfaceComponent } from './interface/interface.component';

const routes: Routes = [
  {
    path: '',
    component: InterfaceComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
