"use strict";

const findClosest = (x, y, z) => {
  const d1 = Math.abs(x - z);
  const d2 = Math.abs(y - z);
  if (d1 < d2) return x;
  if (d2 < d1) return y;
  return 0;
};

console.log(findClosest(2, 7, 5));
