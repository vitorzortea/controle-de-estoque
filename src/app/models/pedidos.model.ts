import { Model } from '../core/model';
import { Clientes } from "./clientes.model";
import { Produtos } from "./produtos.model";

export class Pedidos extends Model {
  id: string;
  createOn: Date;
  cliente: string;
  produto: string[];
  valor: number;
}
