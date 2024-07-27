import { v4 as uuidv4 } from 'uuid';

export function createValueWithIdList(valueList) {
  return valueList.map(createValueWithId);
}

let _value = 10;
export function createValueWithId(value) {
  return {
    id: uuidv4(),
    value: value ?? _value++,
  };
}
