const moveZeroes = (nums) => {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count += 1
    } else {
      nums[i - count] = nums[i]
    }
  }
  for (let i = nums.length - count; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
};