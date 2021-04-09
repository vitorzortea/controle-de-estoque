import { Clientes } from '../models/clientes.model';
import { Injectable } from '@angular/core';
import { ServiceFirebase } from '../core/servicefirebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientesService extends ServiceFirebase<Clientes> {

  constructor(firestore: AngularFirestore) {
    super(Clientes, firestore, 'clientes');
  }
}
