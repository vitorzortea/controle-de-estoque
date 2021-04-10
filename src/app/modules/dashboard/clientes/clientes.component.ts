import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    public clientes: ClientesService
  ) { }

  ngOnInit(): void {
    this.clientes.list().subscribe(
      (res)=>console.log(res)
    )
    this.clientes$	=	this.clientes.list();
    console.log(this.clientes$);
  }

}
