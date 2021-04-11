import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Clientes } from 'src/app/models/clientes.model';
import { Pedidos } from 'src/app/models/pedidos.model';
import { Produtos } from 'src/app/models/produtos.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.styl']
})
export class AddPedidoComponent implements OnInit {
  id;
  valorTotal = 0;
  update = false;
  formPedidos: FormGroup;
  clientes$:	Observable<Clientes[]>;
  produtos$:	Observable<Produtos[]>;

  constructor(
    public pedidosService: PedidosService,
    public clientesService: ClientesService,
    public produtosService: ProdutosService,
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.clientes$	=	this.clientesService.list().pipe(
      map((event)=>
        event.sort((a, b)=> a.nome.localeCompare(b.nome))
      )
    );
    this.produtos$	=	this.produtosService.list().pipe(
      map((event)=>
        event.sort((a, b)=> a.nome.localeCompare(b.nome))
      )
    );
    this.id = this.route.snapshot.paramMap.get("id");
    this.setForm(new Pedidos, false)
    if(this.id){
      this.pedidosService.get(this.id).subscribe((pedido)=>{
        this.update = true;
        this.produtosService.list().subscribe((produto)=>this.setForm(pedido, true))
      });
    }
  }
  setForm(pedidos, isEdit){
    this.formPedidos = this.fb.group({
      id: new FormControl(pedidos.id),
      createOn: new FormControl(this.dataFormatada),
      cliente: new FormControl(pedidos.cliente),
      produto: new FormControl(pedidos.produto),
      valor: new FormControl(pedidos.valor),
    });
    this.valorTotal = (this.formPedidos.controls.valor.value) ? this.formPedidos.controls.valor.value : 0
    if(isEdit){
      const checkBox = document.querySelectorAll('[name="produtoControl"]') as NodeListOf<HTMLInputElement>
      checkBox.forEach(singleCheckbox => {
        const nomeProduto = singleCheckbox.value.split("_n_")[0]
        this.formPedidos.controls.produto.value.forEach(singleProduto => {
          if(singleProduto == nomeProduto){
            singleCheckbox.checked = true
          }
        });
      })
    }
  }
  salvar(){
    this.pedidosService.createOrUpdate(this.formPedidos.value).then(() => {
      this.router.navigate(['/pedidos'])
    })
    .catch((erro) => {
      console.log(`Erro ao salvar o Cliente.`, `Detalhes: ${erro}`)
    })
  }
  limpar(){ this.formPedidos.reset() }

  changeValores(){
    const checkBox = document.querySelectorAll('[name="produtoControl"]:checked') as NodeListOf<HTMLInputElement>
    const arrayTemp = []
    this.valorTotal = 0;
    if(checkBox){
      checkBox.forEach(e=>{
        const resultado = e.value.split("_n_");
        this.valorTotal = this.valorTotal+Number(resultado[1]);
        arrayTemp.push(resultado[0])
      })
      this.formPedidos.controls.produto.setValue(arrayTemp)
      this.formPedidos.controls.valor.setValue(this.valorTotal)
    }
  }

  get dataFormatada(){
    const pad = function(num) { return ('00'+num).slice(-2) };
    let date = new Date();
    return date.getUTCFullYear()+'-'+
    pad(date.getUTCMonth() + 1)+'-'+
    pad(date.getUTCDate())+' '+
    pad(date.getUTCHours())+':'+
    pad(date.getUTCMinutes())+':'+
    pad(date.getUTCSeconds());
  }

}
