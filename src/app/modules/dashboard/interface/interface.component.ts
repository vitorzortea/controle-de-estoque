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

  ngOnInit() {
    this.user = this.authServ.authUser();
  }

  logout() {
    this.authServ.logout().then(() => this.router.navigate(['/auth']));
  }

}
