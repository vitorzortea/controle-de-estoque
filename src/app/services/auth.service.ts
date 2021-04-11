import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  authUser(): Observable<firebase.User> {
    return this.user;
  }
  criarUser(name: string, email: string, senha: string){
    this.afAuth.createUserWithEmailAndPassword(email, senha).then(
      ()=>{ this.afAuth.currentUser.then(
          (user)=>user.updateProfile({
            displayName: name,
            photoURL: "https://i.ibb.co/k4jQdk2/avatar-1.jpg"
          })
      )}
    );
  }
  login(email: string, senha: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, senha);
  }
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email)
  }
}
