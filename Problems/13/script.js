// const buildArray = (nums) => {
//   let ans = [];
//   for (let i = 0; i < nums.length; i++) {
//     ans[i] = nums[nums[i]];
//   }
//   return ans;
// }

const buildArray = (nums) => {
  return nums.map((num) => nums[num]);
}