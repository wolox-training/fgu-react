import { isArray } from './utils';


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


export function reverseMerge(array1, array2) {
  return [...array2, ...array1];
}


export function filterAttribs(args) {
  var {a, b, ...rest} = args;
  return rest;
}
