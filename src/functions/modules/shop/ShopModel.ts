import {Model} from '@/functions/core/Model';

export interface ShopModel extends Model {
  id: string;
  name: string;
  prefecture: string;
  location: {
    lat: number;
    lng: number;
  };
  link?: string;
}
