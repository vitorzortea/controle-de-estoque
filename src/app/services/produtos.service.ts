import { Produtos } from '../models/produtos.model';
import { Injectable } from '@angular/core';
import { ServiceFirebase } from '../core/servicefirebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends ServiceFirebase<Produtos> {

  constructor(firestore: AngularFirestore) {
    super(Produtos, firestore, 'produtos');
  }
}
