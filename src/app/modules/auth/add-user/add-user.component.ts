import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.styl']
})
export class AddUserComponent implements OnInit {
  nome: string;
  email: string;
  senha: string;

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void { }

  criar(){
    if(this.nome && this.email && this.senha){
      this.authServ.criarUser(this.nome, this.email, this.senha)
      alert('Conta criada com sucesso!')
      this.router.navigate(['/'])
    }else{
      alert('Todos os campos devem ser preenchidos')
    }
  }

}
