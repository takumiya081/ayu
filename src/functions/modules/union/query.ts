import {UnionDataType, unionsData} from './data/unionsData';
import {UnionModel} from './UnionModel';

export function toUnionModel(data: UnionDataType): UnionModel {
  return {
    id: data.id,
    name: data.name,
    prefecture: data.prefecture,
    link: data.link,
    phone: data.phone,
    terms: data.terms,
  };
}

export function findUnionById(id: string): UnionModel | undefined {
  const result = unionsData.find((u) => u.id === id);
  return result ? toUnionModel(result) : result;
}
