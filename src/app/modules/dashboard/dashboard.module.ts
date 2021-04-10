import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InterfaceComponent } from './interface/interface.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BoxComparativoComponent } from 'src/app/core/components/box-comparativo/box-comparativo.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InterfaceComponent, DashboardComponent, ClientesComponent, BoxComparativoComponent, AddClienteComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
