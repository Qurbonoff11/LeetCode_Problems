const plusOne = (digits) => {
  let result = [...digits];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      result[i] += 1;
      return result;
    } else {
      result[i] = 0;
    }
  }
  result.unshift(1);
  return result;
};