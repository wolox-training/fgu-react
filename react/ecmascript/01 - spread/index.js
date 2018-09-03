import { isArray } from './utils';
/*
export function min() {
  isArray();
  return Math.min();
}*/

export function min(param) {
  if (isArray(param)) {
    return Math.min(...param); //Math.min();
  }
  return param;
}

export function copy() {

}
