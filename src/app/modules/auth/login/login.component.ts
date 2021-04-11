import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  email: string;
  senha: string;
  emailEnviado: boolean;

  viewPass = 'password';

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {}
  toggleView(){
    this.viewPass = (this.viewPass == 'password') ? this.viewPass = 'text' : this.viewPass = 'password';
  }
  logar() {
    try {
      if (this.email == undefined || this.senha == undefined) {
        alert('Todos os campos devem ser preenchido');
        return
      }
      this.authServ.login(this.email, this.senha)
        .then(() => { this.router.navigate(['/']) })
        .catch(erro => {
          switch (erro.code) {
            case 'auth/user-not-found': {
              alert('Não existe usuário para o email informado');
              break;
            }
            case 'auth/invalid-email': {
              alert('Email inválido');
              break;
            }
            case 'auth/wrong-password': {
              alert('Senha Inválida');
              break;
            }
            default: {
              alert('Erro: '+erro.message);
              break;
            }
          }
        });
    } catch (erro) {
      alert(`Erro ao logar. Detalhes: ${erro}`);
    }

  }

}
