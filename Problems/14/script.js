// const theMaximumAchievableX = (num, t) => {
//   return num + 2 * t;
// };

var theMaximumAchievableX = function (num, t) {
  const x1 = num + t;
  const x2 = num - t;
  let result = 0;

  console.log(x1);
  console.log(x2);

  result = Math.max(x1 + t, x2 - t);

  console.log(result);
  return result;
};