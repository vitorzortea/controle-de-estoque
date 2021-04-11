import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.styl']
})
export class InterfaceComponent implements OnInit {

  user: Observable<firebase.User>;
  constructor(private authServ: AuthService, private router: Router) { }
  hideMenu = false

  ngOnInit() {
    this.user = this.authServ.authUser()
    this.user.subscribe((res)=>console.log(res))
  }

  logout() {
    this.authServ.logout().then(() => this.router.navigate(['/auth']))
  }
  toggleMenu(){ this.hideMenu = !this.hideMenu}

}
