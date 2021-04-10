import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.styl']
})
export class AddProdutoComponent implements OnInit {
  id;
  update = false;
  formProduto: FormGroup;

  constructor(
    public produtoService: ProdutosService,
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.setForm(new Produtos)
    if(this.id){
      this.produtoService.get(this.id).subscribe((res)=>{
        this.update = true;
        console.log(res)
        this.setForm(res)
      });
    }
  }
  setForm(produto){
    this.formProduto = this.fb.group({
      id: new FormControl(produto.id),
      nome: new FormControl(produto.nome),
      createOn: new FormControl(this.dataFormatada),
      valor: new FormControl(produto.valor),
    });
  }
  salvar(){
    console.log(this.formProduto.value)
    this.produtoService.createOrUpdate(this.formProduto.value).then(() => {
      this.router.navigate(['/produtos'])
    })
    .catch((erro) => {
      console.log(`Erro ao salvar o Cliente.`, `Detalhes: ${erro}`)
    })
  }
  limpar(){ this.formProduto.reset() }

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
