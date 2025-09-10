'use strict';

const numIdenticalPairs = (num) => {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] === num[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));