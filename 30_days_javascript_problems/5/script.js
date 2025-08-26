// const map = (arr, fn) => {
//   let result = [];
//   for (const item of arr) {
//     result.push(fn(item));
//   }
//   return result;
// };

const map = (arr, fn) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

console.log(map([1, 2, 3], (n) => n * 2));