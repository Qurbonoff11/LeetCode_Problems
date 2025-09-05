'use strict';

let arr = [0, 1, 2, "sa", 3, "sa", 4, 2]
let val = "sa"

const removeElement = (nums, val) => {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      count += 1
    } else {
      nums[i - count] = nums[i]
    }
  }
  return nums.length - count
}

console.log(removeElement(arr, val));
