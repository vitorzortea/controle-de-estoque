import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes.model';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.styl']
})
export class AddClienteComponent implements OnInit {
  id;
  update = false;
  formCliente: FormGroup;
  listEstado = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"]

  constructor(
    public clientesService: ClientesService,
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.setForm(new Clientes)
    if(this.id){
      this.clientesService.get(this.id).subscribe((res)=>{
        this.update = true;
        console.log(res)
        this.setForm(res)
      });
    }
  }
  setForm(cliente){
    this.formCliente = this.fb.group({
      id: new FormControl(cliente.id),
      createOn: new FormControl(this.dataFormatada),
      nome: new FormControl(cliente.nome),
      cpf:  new FormControl(cliente.cpf),
      cep:  new FormControl(cliente.cep),
      logadouro:  new FormControl(cliente.logadouro),
      numero:  new FormControl(cliente.numero),
      bairro:  new FormControl(cliente.bairro),
      complemento:  new FormControl(cliente.complemento),
      cidade:  new FormControl(cliente.cidade),
      estados:  new FormControl(cliente.estados),
      email:  new FormControl(cliente.email),
      nacimento:  new FormControl(cliente.nacimento),
    });
  }
  salvar(){
    console.log(this.formCliente.value)
    this.clientesService.createOrUpdate(this.formCliente.value).then(() => {
      this.router.navigate(['/clientes'])
    })
    .catch((erro) => {
      console.log(`Erro ao salvar o Cliente.`, `Detalhes: ${erro}`)
    })
  }
  limpar(){ this.formCliente.reset() }

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
