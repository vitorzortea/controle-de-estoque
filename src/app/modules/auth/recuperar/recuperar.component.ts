import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.styl']
})
export class RecuperarComponent implements OnInit {
  email: string;

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  recuperar(){
    if(this.email){
      this.authServ.resetPassword(this.email).then(()=>{
        alert(`E-mail de recuperação de senha foi enviado para ${this.email}`)
        this.router.navigate(['/'])
      })
    }
  }
}
