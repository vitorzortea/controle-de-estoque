import { Clientes } from "./clientes.model";
import { Produtos } from "./produtos.model";

export class Pedidos {
  id: string;
  data: Date;
  cliente: Clientes;
  produto: Produtos;
}
