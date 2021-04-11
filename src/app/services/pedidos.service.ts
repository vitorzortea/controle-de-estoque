import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/servicefirebase.service';
import { Pedidos } from '../models/pedidos.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService extends ServiceFirebase<Pedidos> {

  constructor(firestore: AngularFirestore) {
    super(Pedidos, firestore, 'pedidos');
  }
}
