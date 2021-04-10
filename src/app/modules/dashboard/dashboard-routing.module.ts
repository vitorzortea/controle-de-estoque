import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterfaceComponent } from './interface/interface.component';

const routes: Routes = [
  {
    path: '',
    component: InterfaceComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'clientes/add', component: AddClienteComponent },
      { path: 'clientes/:id', component: AddClienteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
