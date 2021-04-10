import { Model } from '../core/model';

export class Clientes extends Model {
  id: string;
  createOn: Date;
  nome: string;
  cpf: string;
  email: string;
  nascimento: Date;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade: string;
  estado: string;
}
