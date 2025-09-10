let num = 12
let str = 'hello'
let bool = true
let arr = [1, 2, 3]

const argumentsLength = (...args) => {
  let result = 0
  // for (let i = 0; i < args.length; i++) {
  //   result += 1
  // }
  // args.forEach(element => {
  //   result += 1
  // });
  return result
}

console.log(argumentsLength(num, str));