import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { AddProdutoComponent } from './add-produto/add-produto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterfaceComponent } from './interface/interface.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {
    path: '',
    component: InterfaceComponent,
    children: [
      { path: '', component: DashboardComponent },

      { path: 'clientes', component: ClientesComponent },
      { path: 'clientes/add', component: AddClienteComponent },
      { path: 'clientes/:id', component: AddClienteComponent },

      { path: 'produtos', component: ProdutosComponent },
      { path: 'produtos/add', component: AddProdutoComponent },
      { path: 'produtos/:id', component: AddProdutoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
