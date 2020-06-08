import {Model} from '@/functions/core/Model';

export interface ShopModel extends Model {
  id: string;
  name: string;
  prefecture: string;
  phone: string;
  link?: string;
  terms: string;
}
