import {RiverDataType, riversData} from './data/riversData';
import {RiverModel} from './RiverModel';

export function toRiverModel(data: RiverDataType): RiverModel {
  return {
    id: data.id,
    name: data.name,
    location: {
      lat: data.lat,
      lng: data.lng,
    },
    prefecture: data.prefecture,
    unionId: data.unionId,
  };
}

export function findRiverById(id: string): RiverModel | undefined {
  const result = riversData.find((r) => r.id === id);
  return result ? toRiverModel(result) : result;
}

export function queryByName(name: string): ReadonlyArray<RiverModel> {
  const result = riversData.filter((r) => r.name.indexOf(name) !== -1);
  return result.map((r) => toRiverModel(r));
}
