import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes.model';
import { Endereco } from 'src/app/models/endereco.model';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.styl']
})
export class AddClienteComponent implements OnInit {
  formCliente: FormGroup;
  listEstado = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"]

  constructor(
    public clientesService: ClientesService,
    public fb: FormBuilder,
    public router: Router,
  ) { }

  ngOnInit(): void { this.setForm() }
  setForm(){
    let cliente = new Clientes;
    cliente.endereco = new Endereco
    this.formCliente = this.fb.group({
      nome: new FormControl(cliente.nome),
      cpf:  new FormControl(cliente.cpf),
      cep:  new FormControl(cliente.endereco.cep),
      logadouro:  new FormControl(cliente.endereco.logradouro),
      numero:  new FormControl(cliente.endereco.numero),
      bairro:  new FormControl(cliente.endereco.bairro),
      complemento:  new FormControl(cliente.endereco.complemento),
      cidade:  new FormControl(cliente.endereco.cidade),
      estados:  new FormControl(cliente.endereco.estado),
      email:  new FormControl(cliente.email),
      nacimento:  new FormControl(cliente.nascimento),
    });
  }
  save(){
    console.log(this.formCliente.value)
    this.clientesService.createOrUpdate(this.formCliente.value).then(() => {
      console.log(`Cliente 'salvo' com sucesso.`)
    })
    .catch((erro) => {
      console.log(`Erro ao salvar o Cliente.`, `Detalhes: ${erro}`)
    })
    this.formCliente.reset()
  }


}
