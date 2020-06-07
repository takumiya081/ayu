import {Model} from '@/functions/core/Model';

export interface RiverModel extends Model {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  prefecture: string;
  unionId?: string;
}
