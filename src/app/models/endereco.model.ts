import { Model } from '../core/model';

export class Endereco extends Model {
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade: string;
  estado: string;
}
