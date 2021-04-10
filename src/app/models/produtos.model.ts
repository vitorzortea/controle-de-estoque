import { Model } from '../core/model';
export class Produtos extends Model {
  id: string;
  createOn: Date;
  nome: string;
  valor: number;
}
