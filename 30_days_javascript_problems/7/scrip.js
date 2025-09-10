let arr = [1, 2, 3, 4]
let init = 10
const sum = (a, b) => a * b

const reduce = (arr, fn, init) => {
  let result = init
  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i])
  }
  return result
}