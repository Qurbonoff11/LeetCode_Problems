'use strict';

const arr = ["h", "e", "l", "l", "o"];

const reverseString = (s) => {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left += 1
    right -= 1
  }
  return s
};

console.log(reverseString(arr));
