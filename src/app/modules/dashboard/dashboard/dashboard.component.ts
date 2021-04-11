import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Clientes } from 'src/app/models/clientes.model';
import { Pedidos } from 'src/app/models/pedidos.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  clientes$:	Observable<Clientes[]>;
  pedidos$:	Observable<Pedidos[]>;
  mensal: number;
  anual: number;
  meta: number;
  constructor(
    public clientesService: ClientesService,
    public pedidosService: PedidosService,
  ) { }
  ngOnInit(): void {
    this.clientes$	=	this.clientesService.list()
    this.pedidos$	=	this.pedidosService.list()
  }
  isPedidos(pedidosGet){
    if(pedidosGet){
      this.mensal = 0
      this.anual = 0
      pedidosGet.forEach(e => {
        if(new Date(e.createOn).getMonth() == new Date().getMonth()){this.mensal =+ e.valor }
        if(new Date(e.createOn).getFullYear() == new Date().getFullYear()){this.anual  =+ e.valor}
      });
      this.meta = (this.anual)/(Number(new Date().getMonth())+1)
    }
    return pedidosGet != undefined || pedidosGet != null;
  }

}
