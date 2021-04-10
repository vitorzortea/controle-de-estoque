import { Model } from '../core/model';
import { Endereco } from './endereco.model';

export class Clientes extends Model {
  createOn: Date;
  nome: string;
  cpf: string;
  email: string;
  nascimento: Date;
  endereco: Endereco;
}
