const getNoZeroIntegers = (n) => {
  const hasZero = (num) => {
    return num.toString().includes("0");
  };

  for (let a = 1; a < n; a++) {
    let b = n - a;
    if (!hasZero(a) && !hasZero(b)) {
      return [a, b];
    }
  }
};
