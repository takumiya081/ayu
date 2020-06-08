import {Model} from '@/functions/core/Model';

export interface UnionModel extends Model {
  id: string;
  name: string;
  prefecture: string;
  link?: string;
  terms?: string;
  phone?: string;
}
