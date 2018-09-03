import { isArray } from './utils';
/*
export function min() {
  isArray();
  return Math.min();
}*/

export function min(args) {
  if(!!args || args === ''){
    if (isArray(args)) {
      return Math.min(...args);
    }
    return Math.min(...arguments);
  } else {
    return undefined;
  }
}


export function copy(args) {
  if(isArray(args)) {
    return [...args];
  } else {
      return {...args};
  }
}
