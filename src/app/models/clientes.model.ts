import { Model } from '../core/model';
import { Endereco } from './endereco.model';

export class Clientes extends Model {
  nome: string;
  cpf: string;
  email: string;
  nascimento: Date;
  endereco: Endereco;
}
