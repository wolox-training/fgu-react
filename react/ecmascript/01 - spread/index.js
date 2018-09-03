import { isArray } from './utils';
/*
export function min() {
  isArray();
  return Math.min();
}*/

export function min(args) {
  if (isArray(args)) {
    return Math.min(...args);
  }
  return Math.min(...arguments);
}

export function copy() {

}
