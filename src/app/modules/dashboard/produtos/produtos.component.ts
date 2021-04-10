import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.styl']
})
export class ProdutosComponent implements OnInit {
  produtos$:	Observable<Produtos[]>;
  constructor(
    public produtos: ProdutosService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.produtos$	=	this.produtos.list().pipe(
      map((event)=>
        event.sort((a, b)=>
          new Date(b.createOn).getTime() - new Date(a.createOn).getTime()
        )
      )
    );
  }
  deletar(id){ this.produtos.delete(id) }

}
