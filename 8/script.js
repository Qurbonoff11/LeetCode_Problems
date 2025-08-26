let array = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
let init = 4;

const compose = (fns) => {
  return (x) => {
    let result = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
};

console.log(compose(array)(init));
