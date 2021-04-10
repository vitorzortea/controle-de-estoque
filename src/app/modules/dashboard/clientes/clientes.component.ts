import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Clientes } from 'src/app/models/clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.styl']
})
export class ClientesComponent implements OnInit {
  clientes$:	Observable<Clientes[]>;
  constructor(
    public clientes: ClientesService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.clientes$	=	this.clientes.list().pipe(
      map((event)=>
        event.sort((a, b)=>
          new Date(b.createOn).getTime() - new Date(a.createOn).getTime()
        )
      )
    );
  }
  deletar(id){ this.clientes.delete(id) }

}
