import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InterfaceComponent } from './interface/interface.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BoxComparativoComponent } from 'src/app/core/components/box-comparativo/box-comparativo.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProdutoComponent } from './add-produto/add-produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { AddPedidoComponent } from './add-pedido/add-pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';


@NgModule({
  declarations: [InterfaceComponent, DashboardComponent, ClientesComponent, BoxComparativoComponent, AddClienteComponent, AddProdutoComponent, ProdutosComponent, AddPedidoComponent, PedidosComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
