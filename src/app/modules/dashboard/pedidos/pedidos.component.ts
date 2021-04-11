import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pedidos } from 'src/app/models/pedidos.model';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.styl']
})
export class PedidosComponent implements OnInit {
  pedidos$:	Observable<Pedidos[]>;
  constructor(
    public pedidos: PedidosService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.pedidos$	=	this.pedidos.list().pipe(
      map((event)=>
        event.sort((a, b)=>
          new Date(b.data).getTime() - new Date(a.data).getTime()
        )
      )
    );
  }
  deletar(id){ this.pedidos.delete(id) }

}
