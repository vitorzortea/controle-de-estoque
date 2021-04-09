import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  viewPass = 'password';

  constructor() { }

  ngOnInit(): void {
  }

  toggleView(){
    this.viewPass = (this.viewPass == 'password') ? this.viewPass = 'text' : this.viewPass = 'password';
  }

}
