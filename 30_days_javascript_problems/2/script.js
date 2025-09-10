const createCounter = (n) => {

  let counter = n;

  return function () {
    return counter++;
  }
}