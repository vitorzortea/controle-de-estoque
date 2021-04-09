import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InterfaceComponent } from './interface/interface.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [InterfaceComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
