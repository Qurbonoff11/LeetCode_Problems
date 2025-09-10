const createCounter = (init) => {

  let counter = init;

  return {
    increment: () => {
      return counter += 1;
    },
    decrement: () => {
      return counter -= 1;
    },
    reset: () => {
      return counter = init;
    },
  };
};

console.log(createCounter(5));
