'use strict'

const sortBy = (arr, fn) => {
  return arr.sort((a, b) => fn(a) - fn(b));
}

console.log(sortBy([{x: 2}, {x: 3}, {x: 1}], (a) => a.x));
